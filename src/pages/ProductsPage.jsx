import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

const STORAGE_KEY = "cafeteria_products";

function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setProducts(stored);
  }, []);

  if (products.length === 0) {
    return (
      <div className="container mt-4">
        <h2>No hay productos disponibles ☹️</h2>
        <p>
          Podés agregarlos desde el <a href="/admin">Panel Admin</a>
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Productos Disponibles ☕</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              {product.image ? (
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/300x200?text=Sin+Imagen"
                  className="card-img-top"
                  alt="default"
                />
              )}
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    Precio: ${product.price.toFixed(2)}
                  </p>
                </div>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => addToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
