import { Container } from "react-bootstrap";
import { FaCoffee, FaShippingFast, FaLeaf, FaHandsHelping } from "react-icons/fa";
import "../../src/style/WhyChooseUs.css"; // Assuming you have a CSS file for styles

const WhyChooseUs = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4" style={{ color: "#35564d", fontWeight: "700" }}>
        ¿Por qué elegirnos?
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className="why-card p-4 bg-light rounded shadow-sm" style={{maxWidth: 250}}>
          <FaCoffee size={50} color="#16a88c" className="mb-3" />
          <h5>Calidad Premium</h5>
          <p>Seleccionamos los mejores granos para garantizar sabor y aroma únicos.</p>
        </div>
        <div className="why-card p-4 bg-light rounded shadow-sm" style={{maxWidth: 250}}>
          <FaShippingFast size={50} color="#16a88c" className="mb-3" />
          <h5>Envío rápido</h5>
          <p>Entregas ágiles para que disfrutes tu café sin esperas.</p>
        </div>
        <div className="why-card p-4 bg-light rounded shadow-sm" style={{maxWidth: 250}}>
          <FaLeaf size={50} color="#16a88c" className="mb-3" />
          <h5>Compromiso sostenible</h5>
          <p>Apoyamos prácticas responsables y amigables con el medio ambiente.</p>
        </div>
        <div className="why-card p-4 bg-light rounded shadow-sm" style={{maxWidth: 250}}>
          <FaHandsHelping size={50} color="#16a88c" className="mb-3" />
          <h5>Atención personalizada</h5>
          <p>Te acompañamos en cada paso para que elijas lo mejor para vos.</p>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
