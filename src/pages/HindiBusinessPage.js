import { useState, useEffect } from 'react';
import { Row, Container, Card, Badge } from 'react-bootstrap';
import { API_KEY } from '../config';

function HindiBusinessPage() {

  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://gnews.io/api/v4/top-headlines?category=business&lang=hi&apikey=" + API_KEY)
      .then((response) => response.json())
      .then((json) => {
        if (json.articles) {
          setData(json.articles);
        }
      })
  }

  useEffect(() => {
    apiGet();
    const interval = setInterval(() => {
      apiGet();
    }, 1000000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Container fluid className="mt-3">

        <h3 className="mb-3">Business News - Hindi</h3>

        <Row xs={1} md={3} className="g-4">
          {
            data.map(
              (value, index) => {
                return (
                  <Card key={index}>
                    <Card.Img variant="top" src={value.image} height="275px" />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>
                        {value.description}
                      </Card.Text>
                      <div className="mb-2">
                        <Badge bg="secondary" className="me-2">
                          {value.source && value.source.name}
                        </Badge>
                        <small className="text-muted">
                          {value.publishedAt && new Date(value.publishedAt).toLocaleString()}
                        </small>
                      </div>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                      <a href={value.url} target="_blank" rel="noopener noreferrer">
                        Read full article
                      </a>
                      {value.source && value.source.url && (
                        <a href={value.source.url} target="_blank" rel="noopener noreferrer" className="text-muted small">
                          Visit source
                        </a>
                      )}
                    </Card.Footer>
                  </Card>
                );
              }
            )
          }


        </Row>

      </Container>

    </>
  );
}

export default HindiBusinessPage;
