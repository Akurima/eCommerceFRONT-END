import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import "../../styles/About.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import testimonios from "../../testimonios";

const img1 = "../../images/about/about1.jpg";
const img2 = "../../images/about/about.jpg";
const img3 = "../../images/about/about2.jpg";
const img4 = "../../images/about/about3.jpg";

const ciudadesEspanol = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "España",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
];


function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <Container className="intro-section text-center my-5">
          <h1 className="title">Sobre Nosotros</h1>
          <p className="subtitle">
            Una cafetería comprometida con la calidad y el amor por el café.
          </p>
          <p className="description mx-auto">
            Seleccionamos los mejores granos para que disfrutes momentos únicos
            donde quieras que estés. Calidad, pasión y tradición en cada taza.
          </p>
          <p className="description mx-auto mt-3" style={{ maxWidth: 700 }}>
            Fundada en 2015, Bruma nació con la idea de conectar a las personas
            a través de experiencias que despierten los sentidos. Nuestra
            pasión por el café nos impulsa a innovar, aprendiendo y mejorando
            cada día para ofrecerte lo mejor.
          </p>
        </Container>

        <section className="vision-mission-section my-5">
          <Container>
            <Row className="align-items-center mb-5">
              <Col md={6} className="image-wrapper">
                <img src={img1} alt="Granos de café" loading="lazy" />
              </Col>
              <Col md={6} className="text-wrapper">
                <h2 className="section-title">Nuestra Visión</h2>
                <p className="section-text">
                  Convertirnos en una marca referente que inspire y acerque la
                  cultura del café de calidad a cada hogar. Apostamos al
                  consumo responsable y a la conexión a través de sabores únicos.
                </p>
                <p className="section-text">
                  Imaginamos un futuro donde cada taza de café sea un puente
                  entre personas, un momento de pausa y placer en medio del
                  ritmo acelerado del mundo.
                </p>
              </Col>
            </Row>

            <Row className="align-items-center flex-md-row-reverse mb-5">
              <Col md={6} className="image-wrapper">
                <img src={img2} alt="Tostado de granos" loading="lazy" />
              </Col>
              <Col md={6} className="text-wrapper">
                <h2 className="section-title">Nuestra Misión</h2>
                <p className="section-text">
                  Ofrecer una experiencia auténtica, combinando tradición,
                  sabor y atención cercana para acompañar cada momento del día
                  con el mejor café.
                </p>
                <p className="section-text">
                  Nos comprometemos con la sostenibilidad y la trazabilidad,
                  trabajando junto a productores locales para garantizar un
                  impacto positivo en la comunidad y el medio ambiente.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="values-section my-5 p-4 rounded">
          <Container>
            <h2 className="section-title text-center mb-4">Nuestros Valores</h2>
            <Row className="text-center">
              <Col md={4} className="mb-4">
                <h4 className="value-title">Calidad</h4>
                <p className="value-text">
                  Seleccionamos los mejores granos y materias primas para
                  garantizar una experiencia premium en cada producto.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <h4 className="value-title">Sostenibilidad</h4>
                <p className="value-text">
                  Promovemos prácticas responsables que cuidan el planeta y
                  apoyan a los productores locales.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <h4 className="value-title">Pasión</h4>
                <p className="value-text">
                  El amor por el café nos impulsa a innovar y crear momentos
                  inolvidables para nuestros clientes.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="gallery-section my-5">
          <Container>
            <Row className="gallery-row gx-4 gy-4">
              {[img3, img4, img1].map((src, i) => (
                <Col md={4} key={i} className="gallery-col">
                  <div className="gallery-image-wrapper">
                    <img src={src} alt={`Galería café ${i + 1}`} loading="lazy" />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

       {/* Sección de testimonios */}
        <section className="testimonials-section py-5">
          <Container>
            <h2 className="contact-title text-center mb-5">
              Nuestros Clientes
            </h2>
            <Row className="justify-content-center gy-4">
              {testimonios.map((t, i) => (
                <Col key={i} md={4}>
                  <div className="testimonial-card p-4 rounded shadow-sm text-center h-100 hover-effect">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="testimonial-avatar rounded-circle mb-3"
                    />
                    <p className="testimonial-text">“{t.quote}”</p>
                    <h5 className="mt-3 mb-0">{t.name}</h5>
                    <small className="text-muted">{t.location}</small>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

 <section className="contact-section my-5">
      <Container fluid className="px-4">
        <Row className="d-flex justify-content-center flex-wrap gap-5">
          {/* Formulario Contacto */}
          <div className="form-wrapper">
            <div className="form-box p-4 rounded shadow-sm hover-effect">
              <h2 className="contact-title text-center mb-4">Contáctanos</h2>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escribí tu mensaje..." className="input-field" />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" className="btn-submit">
                    Enviar mensaje
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          {/* Trabaja con nosotros */}
          <div className="form-wrapper">
            <div className="form-box p-4 rounded shadow-sm hover-effect">
              <h2 className="contact-title text-center mb-4">Trabajá con Nosotros</h2>
              <Form encType="multipart/form-data">
                <Form.Group controlId="formCVName" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formCVEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formCVFile" className="mb-3">
                  <Form.Label>Adjuntar CV</Form.Label>
                  <Form.Control type="file" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formCVMessage" className="mb-3">
                  <Form.Label>Mensaje (opcional)</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Escribí un mensaje..." className="input-field" />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" className="btn-submit">
                    Enviar CV
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          {/* Buzón de sugerencias */}
          <div className="form-wrapper">
            <div className="form-box p-4 rounded shadow-sm hover-effect">
              <h2 className="contact-title text-center mb-4">Buzón de Sugerencias</h2>
              <Form>
                <Form.Group controlId="formSuggestionName" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formSuggestionEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" className="input-field" />
                </Form.Group>
                <Form.Group controlId="formSuggestionText" className="mb-3">
                  <Form.Label>Sugerencia</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Escribí tu sugerencia..." className="input-field" />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" className="btn-submit">
                    Enviar sugerencia
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
