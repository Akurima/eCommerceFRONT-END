import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../src/style/NewsletterSection.css";

const NewsletterSection = () => {
  return (
    <div className="newsletter-section py-5">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={8}>
            <h2 className="newsletter-title mb-3">¡Suscribite al Newsletter!</h2>
            <p className="newsletter-subtitle mb-4">
              Recibí ofertas exclusivas, noticias y novedades directamente en tu correo.
            </p>
            <Form className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <Form.Control
                type="email"
                placeholder="Tu email"
                className="newsletter-input"
              />
              <Button type="submit" className="newsletter-btn">
                Suscribirme
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsletterSection;
