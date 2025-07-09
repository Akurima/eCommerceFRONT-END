import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import blogData from "../../blogs.json";
import "../../src/style/NewsSection.css";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <Container className="my-5 blog-section">
      <h2 className="text-center mb-4" style={{ color: "#16A88C" }}>
        Artículos del Blog
      </h2>
      <Row className="justify-content-center">
        {blogs.slice(0, 3).map(({ id, title, description, date, image }, i) => (
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
                  <div className="mt-auto text-center">
                    <Button
                      variant="outline-primary"
                      href={`/blog/${id}`}
                      className="ver-mas-btn"
                    >
                      Leer más →
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogSection;
