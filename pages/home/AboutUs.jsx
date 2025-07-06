<<<<<<< Updated upstream
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import "../../styles/About.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const img1 = "../../images/about/about1.jpg";
const img2 = "../../images/about/about.jpg";
const img3 = "../../images/about/about2.jpg";
const img4 = "../../images/about/about3.jpg";
=======
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
>>>>>>> Stashed changes

const About = () => {
  return (
<<<<<<< Updated upstream
    <>
      <Header />
      <div className="about-section">
        <Container className="text-center my-5">
          <div className="intro-card mx-auto">
            <h1 className="mb-4">Sobre Nosotros </h1>
            <p className="lead mb-3">
              Somos una cafetería apasionada por el buen café. Seleccionamos
              granos de alta calidad y productos cuidadosamente elegidos para
              que vivas una experiencia única, estés donde estés.
            </p>
            <p className="">
              En nuestra tienda online encontrarás todo lo necesario para
              disfrutar del café como más te gusta, con el sabor y el cariño de
              siempre.
            </p>
          </div>
        </Container>

        <Container className="my-5">
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={img1}
                alt="granos de café"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h3 className="text-card mt-4 mt-md-0">Nuestra Visión</h3>
              <p>
                Queremos ser una marca de café reconocida por ofrecer calidad,
                calidez y momentos que inspiran. Buscamos acercar la experiencia
                de una buena taza de café a cada hogar, promoviendo el consumo
                consciente y el amor por los pequeños detalles.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6}>
              <img
                src={img2}
                alt="tostado de granos"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h3 className="text-card mt-4 mt-md-0">Nuestra Misión</h3>
              <p>
                Brindar una experiencia cafetera de calidad, combinando sabor,
                tradición y atención cercana. Nos esforzamos por ofrecer
                productos seleccionados con cuidado, que acompañen cada momento
                del día y conecten a las personas a través del café.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <Row>
            <Col md={4}>
              <img
                src={img3}
                alt="preparando café"
                className="img-fluid rounded shadow mb-4"
              />
            </Col>
            <Col md={4}>
              <img
                src={img4}
                alt="sirviendo café"
                className="img-medio img-fluid rounded shadow mb-4"
              />
            </Col>
            <Col md={4}>
              <img
                src={img1}
                alt="granos enteros"
                className="img-fluid rounded shadow mb-4"
              />
            </Col>
          </Row>
        </Container>

        <Container className="my-5 contact-section">
          <h3 className="text-center mb-4">Contactanos</h3>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribí tu mensaje..."
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="dark" type="submit">
                Enviar mensaje
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
=======
    <div className="about-section">
      <Container className="text-center my-5">
        <h1 className="mb-4">ABOUT US</h1>
        <p className="lead">
          Somos una cafetería apasionada por el buen café. Seleccionamos granos de alta calidad y productos cuidadosamente elegidos para que vivas una experiencia única, estés donde estés.
        </p>
        <p>
          En nuestra tienda online encontrarás todo lo necesario para disfrutar del café como más te gusta, con el sabor y el cariño de siempre.
        </p>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src="../../assets/about_us_1.jpg" alt="granos de café" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h3 className="mt-4 mt-md-0">Nuestra Visión</h3>
            <p>
              Queremos ser una marca de café reconocida por ofrecer calidad, calidez y momentos que inspiran. Buscamos acercar la experiencia de una buena taza de café a cada hogar, promoviendo el consumo consciente y el amor por los pequeños detalles.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center flex-md-row-reverse">
          <Col md={6}>
            <img src="../../assets/about_us_1.jpg" alt="tostado de granos" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h3 className="mt-4 mt-md-0">Nuestra Misión</h3>
            <p>
              Brindar una experiencia cafetera de calidad, combinando sabor, tradición y atención cercana. Nos esforzamos por ofrecer productos seleccionados con cuidado, que acompañen cada momento del día y conecten a las personas a través del café.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <img src="../../assets/about_us_2.jpg" alt="preparando café" className="img-fluid rounded shadow mb-4" />
          </Col>
          <Col md={4}>
            <img src="../../assets/about_us_3.jpg" alt="sirviendo café" className="img-fluid rounded shadow mb-4" />
          </Col>
          <Col md={4}>
            <img src="../../assets/about_us.jpg" alt="granos enteros" className="img-fluid rounded shadow mb-4" />
          </Col>
        </Row>
      </Container>

      <Container className="my-5 contact-section">
        <h3 className="text-center mb-4">Contactanos</h3>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="tu@email.com" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Escribí tu mensaje..." />
          </Form.Group>
          <div className="text-center">
            <Button variant="dark" type="submit">
              Enviar mensaje
            </Button>
          </div>
        </Form>
      </Container>
    </div>
>>>>>>> Stashed changes
  );
};

export default About;