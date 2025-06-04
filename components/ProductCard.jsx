import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ products, onAddToCart }) => {
  return (
    <div className="cards-container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text text-muted">{product.description}</p>
            <h6 className="card-price text-success fw-bold mb-3">
              ${product.price}
            </h6>
            <button
              className="btn btn-warning mt-auto"
              onClick={() => onAddToCart(product)}
            >
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
