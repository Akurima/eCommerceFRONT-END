import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import newsData from "../../news.json";
import "../../src/style/NewsSection.css";

const NewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleNews, setVisibleNews] = useState([]);

  useEffect(() => {
    setVisibleNews(showAll ? newsData : newsData.slice(0, 3));
  }, [showAll]);

  return (
    <Container className="my-5 news-section">
      <h2 className="text-center mb-4 " style={{ color: "#16A88C" }}>
        Novedades
      </h2>
      <Row className="justify-content-center">
        {visibleNews.map(({ id, title, description, date, image }, i) => (
          <Col key={id} md={4} className="mb-4">
            <Fade delay={i * 200} triggerOnce>
              <Card className="news-card h-100 shadow-sm">
                <Card.Img variant="top" src={image} alt={title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="news-date">
                    {new Date(date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </Card.Text>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
      {!showAll && (
        <div className="text-center mt-3">
          <Button
            className="ver-mas-btn"
            onClick={() => setShowAll(true)}
            variant="outline-dark"
          >
            Ver más novedades →
          </Button>
        </div>
      )}
    </Container>
  );
};

export default NewsSection;
