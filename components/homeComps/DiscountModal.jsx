import { useEffect, useState } from "react";
import "../../src/style/DiscountModal.css";

function DiscountModal() {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const shownBefore = localStorage.getItem("discountModalShown");
    if (!shownBefore) {
      setShowModal(true);
      setTimeout(() => setAnimate(true), 50);
      document.body.classList.add("modal-open");
      localStorage.setItem("discountModalShown", "true");
    }
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setShowModal(false);
      document.body.classList.remove("modal-open");
    }, 300);
  };

  if (!showModal) return null;

  return (
    <div className="custom-modal-backdrop">
      <div className={`custom-modal ${animate ? "show" : ""}`}>
        <div className="custom-modal-header">
          <h5 className="custom-modal-title">
            ¡Promoción especial de bienvenida! 🎁
          </h5>
          <button className="btn-close" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="custom-modal-body text-center">
          ¡Tenés un <strong>10% OFF</strong> en tu pedido de hoy!
        </div>
        <div className="custom-modal-footer">
          <button className="btn btn-success" onClick={handleClose}>
            ¡Aprovechar ahora!
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscountModal;
