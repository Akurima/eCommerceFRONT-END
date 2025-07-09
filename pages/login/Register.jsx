import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import "../../styles/Login.css";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  return (
    <>
      <Header />
      <div className="login-wrapper split-layout">
        {/* Imagen de fondo a la izquierda */}
        <div className="split-right">
          <div className="background-overlay"></div>
        </div>

        {/* Formulario a la derecha */}
        <div className="register-content">
          <Fade direction="right" delay={100} triggerOnce>
            <div className="login-card shadow">
              <h2 className="text-center mb-4">Crear cuenta</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
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
                    type="password"
                    className="form-control input-animated"
                    id="password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn login-boton w-100 btn-animated mt-3"
                >
                  Registrarse
                </button>
              </form>
              <p className="text-center mt-4">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login" className="link-custom">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
