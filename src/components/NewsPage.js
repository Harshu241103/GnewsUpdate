import { useState, useEffect, useCallback } from 'react';
import { Row, Container, Card, Badge, Spinner, Alert } from 'react-bootstrap';
import { API_KEY } from '../config';

function NewsPage({ category, lang, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let json = null;
      
      // 1. Try Vercel Serverless proxy first
      try {
        const proxyRes = await fetch(`/api/news?category=${category}&lang=${lang}`);
        if (proxyRes.ok) {
          json = await proxyRes.json();
        }
      } catch (e) {
        // Proxy fetch failed, proceed to direct fallback
      }

      // 2. Fallback to direct GNews API call if proxy did not return articles
      if (!json || !json.articles) {
        const directUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=${API_KEY}`;
        const directRes = await fetch(directUrl);
        json = await directRes.json();
      }

      if (json && json.articles && json.articles.length > 0) {
        setData(json.articles);
      } else if (json && json.articles && json.articles.length === 0) {
        setData([]);
      } else if (json && json.errors) {
        setError(Array.isArray(json.errors) ? json.errors.join(', ') : String(json.errors));
      } else if (json && json.message) {
        setError(json.message);
      } else {
        setData([]);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch live news');
    } finally {
      setLoading(false);
    }
  }, [category, lang]);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 600000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  return (
    <Container fluid className="mt-3 mb-5">
      <h3 className="mb-3">{title}</h3>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading live news...</span>
          </Spinner>
          <p className="mt-2 text-muted">Fetching latest live news...</p>
        </div>
      )}

      {error && !loading && (
        <Alert variant="warning" className="my-4">
          <strong>Notice:</strong> {error}
        </Alert>
      )}

      {!loading && !error && data.length === 0 && (
        <Alert variant="info" className="my-4">
          No live news articles found for this category right now.
        </Alert>
      )}

      {!loading && data.length > 0 && (
        <Row xs={1} md={3} className="g-4">
          {data.map((value, index) => (
            <Card key={index} className="h-100 shadow-sm">
              {value.image && (
                <Card.Img
                  variant="top"
                  src={value.image}
                  height="220px"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                  {value.title}
                </Card.Title>
                <Card.Text className="text-secondary flex-grow-1" style={{ fontSize: '0.9rem' }}>
                  {value.description}
                </Card.Text>
                <div className="mt-2 mb-2">
                  {value.source && value.source.name && (
                    <Badge bg="secondary" className="me-2">
                      {value.source.name}
                    </Badge>
                  )}
                  <small className="text-muted">
                    {value.publishedAt && new Date(value.publishedAt).toLocaleString()}
                  </small>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0 d-flex justify-content-between align-items-center">
                <a href={value.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                  Read full article
                </a>
                {value.source && value.source.url && (
                  <a href={value.source.url} target="_blank" rel="noopener noreferrer" className="text-muted small">
                    Visit source
                  </a>
                )}
              </Card.Footer>
            </Card>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default NewsPage;
