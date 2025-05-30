// src/pages/ProductsPage.jsx
import { useCart } from "../context/CartContext";

const dummyProducts = [
  { id: 1, name: "Espresso", price: 3.5 },
  { id: 2, name: "Café Latte", price: 4.5 },
  { id: 3, name: "Capuchino", price: 4.0 },
];

function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <h2>Productos Disponibles ☕</h2>
      <div className="row">
        {dummyProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
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
