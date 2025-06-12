import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ products, onAddToCart }) => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
          >
            <div className="product-card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>

                <button
                  className="btn boton mt-auto"
                  onClick={() => onAddToCart(product)}
                >
                  Saber más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
