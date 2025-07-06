// src/components/homeComps/HomeCards.jsx

import "bootstrap/dist/css/bootstrap.min.css";

const HomeCards = ({ products, onAddToCart }) => {
  return (
    <div className="container my-4">
      <div className="cards-container">
        {products.slice(0, 4).map((product, index) => (
          <div key={index} className="product-card">
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
                ¡Hmh, ver más! 🤩
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
