import { useEffect, useState } from "react";

function DiscountModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    // Bloquea el scroll del body mientras el modal está visible
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleClose = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open"); // quita bloqueo scroll
  };

  if (!showModal) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">🎁 ¡Promo especial!</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              ¡Tenés un <strong>10% de descuento</strong> en tu pedido de hoy!
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={handleClose}>
                ¡Aprovechar ahora!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountModal;
