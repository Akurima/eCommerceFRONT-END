import { Container } from "react-bootstrap";
import {
  FaCoffee,
  FaShippingFast,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "../../src/style/WhyChooseUs.css";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <FaCoffee size={50} color="#16a88c" className="mb-3" />,
      title: "Calidad Premium",
      text: "Seleccionamos los mejores granos para garantizar sabor y aroma únicos.",
    },
    {
      icon: <FaShippingFast size={50} color="#16a88c" className="mb-3" />,
      title: "Envío rápido",
      text: "Entregas ágiles para que disfrutes tu café sin esperas.",
    },
    {
      icon: <FaLeaf size={50} color="#16a88c" className="mb-3" />,
      title: "Compromiso sostenible",
      text: "Apoyamos prácticas responsables y amigables con el medio ambiente.",
    },
    {
      icon: <FaHandsHelping size={50} color="#16a88c" className="mb-3" />,
      title: "Atención personalizada",
      text: "Te acompañamos en cada paso para que elijas lo mejor para vos.",
    },
  ];

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4" style={{ color: "#35564d", fontWeight: "700" }}>
        ¿Por qué elegirnos?
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {cards.map((card, index) => (
          <Fade key={index} delay={index * 200} triggerOnce>
            <div
              className="why-card p-4 bg-light rounded shadow-sm"
              style={{ maxWidth: 250 }}
            >
              {card.icon}
              <h5>{card.title}</h5>
              <p>{card.text}</p>
            </div>
          </Fade>
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
