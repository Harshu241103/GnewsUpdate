import { useState, useEffect } from 'react';
import { Row, Container, Card, Badge, Alert, Spinner } from 'react-bootstrap';
import { fetchNews } from '../api';

function NewsPage({ category = 'general', lang = 'en', title = 'General News' }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyMissing, setKeyMissing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchNews(category, lang).then((result) => {
      if (isMounted) {
        setData(result.articles || []);
        setKeyMissing(result.keyMissing);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [category, lang]);

  return (
    <Container fluid className="mt-3 py-2">
      {keyMissing && (
        <Alert variant="warning" className="mb-4 shadow-sm">
          <strong>📢 Notice:</strong> GNews API key is not configured in <code>src/config.js</code>. Displaying demo news articles. 
          To enable live real-time news, get a free API key at <a href="https://gnews.io" target="_blank" rel="noopener noreferrer">gnews.io</a> and set <code>export const API_KEY = "your_key_here";</code> in <code>src/config.js</code>.
        </Alert>
      )}

      <h3 className="mb-4 text-capitalize border-bottom pb-2 font-weight-bold">{title}</h3>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading news...</span>
          </Spinner>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((value, index) => (
            <Card key={index} className="h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              {value.image && (
                <Card.Img 
                  variant="top" 
                  src={value.image} 
                  height="220px" 
                  style={{ objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              )}
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="h5 font-weight-bold mb-3">{value.title}</Card.Title>
                <Card.Text className="text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>
                  {value.description}
                </Card.Text>
                <div className="mb-2">
                  {value.source && value.source.name && (
                    <Badge bg="primary" className="me-2 px-2 py-1">
                      {value.source.name}
                    </Badge>
                  )}
                  <small className="text-muted">
                    {value.publishedAt && new Date(value.publishedAt).toLocaleDateString(undefined, {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </small>
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center bg-light border-top-0 px-4 py-3">
                <a href={value.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                  Read full article →
                </a>
                {value.source && value.source.url && (
                  <a href={value.source.url} target="_blank" rel="noopener noreferrer" className="text-muted small text-decoration-none">
                    Source
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
