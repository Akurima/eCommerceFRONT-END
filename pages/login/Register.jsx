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
        {/* Izquierda: Imagen con animación */}
        <div className="login-image split-right">
          <Fade duration={1000} triggerOnce>
            <div className="background-overlay" />
          </Fade>
        </div>

        {/* Derecha: Formulario */}
        <div className="login-content split-left">
          <div className="login-card shadow animate-fade-in">
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
                />
              </div>
              <button
                type="submit"
                className="btn boton w-100 btn-animated mt-3"
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
