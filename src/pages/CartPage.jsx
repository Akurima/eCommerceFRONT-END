// src/pages/CartPage.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, clearCart, totalItems, totalPrice } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras 🛍️</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{item.name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price.toFixed(2)}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h4>Total de artículos: {totalItems}</h4>
        <h4>Precio total: ${totalPrice.toFixed(2)}</h4>
        <button className="btn btn-warning me-2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Ir al pago
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
