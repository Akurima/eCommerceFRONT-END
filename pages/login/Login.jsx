import "../../styles/Login.css";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

// ✅ Importamos Redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../src/redux/authSlice"; // Asegurate que el path sea correcto

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();
  const { token, status, error, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: inputEmail, password: inputPassword }));
  };

  return (
    <>
      <Header />
      <div className="login-wrapper split-layout">
        {/* Izquierda: Formulario */}
        <div className="login-content split-left">
          <div className="login-card shadow animate-fade-in">
            <h2 className="text-center mb-4">Bienvenido</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  type="email"
                  className="form-control input-animated"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  type="password"
                  className="form-control input-animated"
                  id="password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn login-boton w-100 btn-animated mt-3"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Cargando..." : "Iniciar sesión"}
              </button>
            </form>

            {/* Mensajes opcionales */}
            {error && <p className="text-danger mt-3 text-center">{error}</p>}
            {user && (
              <p className="text-success mt-3 text-center">
                ¡Bienvenido, {user.email}!
              </p>
            )}

            <p className="text-center mt-4">
              ¿Aún no estás registrado?{" "}
              <Link to="/register" className="link-custom">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>

        {/* Derecha: Imagen de fondo con animación */}
        <div className="login-image split-right">
          <Fade duration={1000} triggerOnce>
            <div className="background-overlay" />
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
