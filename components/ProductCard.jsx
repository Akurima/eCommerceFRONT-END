// src/components/ProductCard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="cards-container container row gx-3">
    <div className="card col shadow-sm" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <h6 className="text-success fw-bold mb-3">${price}</h6>
        <button
          className="btn btn-primary mt-auto"
          onClick={onAddToCart}
        >
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
    <div className="card col shadow-sm" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <h6 className="text-success fw-bold mb-3">${price}</h6>
        <button
          className="btn btn-primary mt-auto"
          onClick={onAddToCart}
        >
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
    <div className="card col shadow-sm" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <h6 className="text-success fw-bold mb-3">${price}</h6>
        <button
          className="btn btn-primary mt-auto"
          onClick={onAddToCart}
        >
          Agregar al carrito 🛒
        </button>
      </div>
    </div>

    <div className="card col shadow-sm" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <h6 className="text-success fw-bold mb-3">${price}</h6>
        <button
          className="btn btn-primary mt-auto"
          onClick={onAddToCart}
        >
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
    
    
    </div>
  );
};

export default ProductCard;