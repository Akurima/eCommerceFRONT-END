// src/components/homeComps/HomeCards.jsx

import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";

const HomeCards = ({ products, onAddToCart }) => {
  return (
    <div className="container my-4">
      <div className="cards-container">
        {products.slice(0, 3).map((product, index) => (
          <Fade key={index} delay={index * 200} triggerOnce>
            <div className="product-card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <button
                  className="btn boton mt-auto"
                  onClick={() => onAddToCart && onAddToCart(product)}
                >
                  ¡Veamos! 🤩
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
