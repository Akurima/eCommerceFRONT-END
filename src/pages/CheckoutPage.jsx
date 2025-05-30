// src/pages/CheckoutPage.jsx
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getCurrentUser } from "../auth/authService";

function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

  // 🔐 Protección: Solo usuarios logueados pueden acceder
  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          Debes iniciar sesión para completar tu compra.
          <br />
          <Link to="/login" className="btn btn-sm btn-primary mt-2">
            Ir al Login
          </Link>
        </div>
      </div>
    );
  }

  // 🛑 Si no hay productos y no pagó aún
  if (cartItems.length === 0 && !paid) {
    return (
      <div className="container mt-4">
        <h2>No hay productos para pagar</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Ver productos
        </Link>
      </div>
    );
  }

  const handlePayment = () => {
    // Simular un pago exitoso
    setTimeout(() => {
      setPaid(true);
      clearCart();
      setTimeout(() => navigate("/"), 3000); // redirigir al home luego de 3s
    }, 1500);
  };

  return (
    <div className="container mt-4">
      {!paid ? (
        <>
          <h2>Resumen del Pedido</h2>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <h4>Total a pagar: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-success mt-3" onClick={handlePayment}>
            Pagar ahora
          </button>
        </>
      ) : (
        <div className="alert alert-success" role="alert">
          ✅ ¡Pago realizado con éxito! Redirigiendo a la página principal...
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
