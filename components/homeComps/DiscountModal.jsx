import { useEffect, useState } from "react";
import "../../src/style/DiscountModal.css";

function DiscountModal() {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null); // null = sin validar, true o false
  const [code, setCode] = useState("");
  const [codeGenerated, setCodeGenerated] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    const shownBefore = localStorage.getItem("discountModalShown");
    if (!shownBefore) {
      setShowModal(true);
      setTimeout(() => setAnimate(true), 50);
      document.body.classList.add("modal-open");
      localStorage.setItem("discountModalShown", "true");
    }
  }, []);

  // Validar email con regex simple
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setEmailValid(validateEmail(val));
  };

  // Generar código de descuento aleatorio tipo "BRUMA10AB"
  const generateCode = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters = () =>
      Array.from({ length: 2 }, () =>
        letters.charAt(Math.floor(Math.random() * letters.length))
      ).join("");
    return `BRUMA${Math.floor(10 + Math.random() * 90)}${randomLetters()}`;
  };

  const handleUseDiscount = () => {
    if (!emailValid) {
      setEmailValid(false);
      return;
    }
    const newCode = generateCode();
    setCode(newCode);
    setCodeGenerated(true);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setShowModal(false);
      document.body.classList.remove("modal-open");
    }, 300);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("Código copiado al portapapeles!");
      setTimeout(() => setCopySuccess(""), 3000);
    });
  };

  if (!showModal) return null;

  return (
    <div className="custom-modal-backdrop show">
      <div className={`custom-modal ${animate ? "show" : ""}`}>
        <div className="custom-modal-header">
          <h5 className="custom-modal-title">¡Promoción especial de bienvenida! 🎁</h5>
          <button className="btn-close" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="custom-modal-body text-center">
          {!codeGenerated ? (
            <>
              <p>Dejanos tu correo electrónico para recibir un <strong>10% OFF</strong> y tu código exclusivo:</p>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={handleEmailChange}
                className={`form-control ${emailValid === false ? "is-invalid" : emailValid === true ? "is-valid" : ""}`}
                autoFocus
              />
              {emailValid === false && (
                <div className="invalid-feedback">Por favor, ingresa un correo válido.</div>
              )}
            </>
          ) : (
            <>
              <p>¡Genial! Tu código de descuento es:</p>
              <div className="alert-success" onClick={copyToClipboard} style={{ cursor: "pointer" }}>
                {code} (clic para copiar)
              </div>
              {copySuccess && <small style={{ color: "#fff", marginTop: "0.5rem", display: "block" }}>{copySuccess}</small>}
            </>
          )}
        </div>
        <div className="custom-modal-footer">
          {!codeGenerated ? (
            <button
              className="btn btn-success"
              onClick={handleUseDiscount}
              disabled={!emailValid}
            >
              ¡Aprovechar ahora!
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleClose}>
              Cerrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiscountModal;
