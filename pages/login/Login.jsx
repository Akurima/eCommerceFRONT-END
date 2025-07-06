import "../../styles/Login.css";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setToken] = useState("");

  return (
    <>
      <Header />
      <div className="login-wrapper split-layout">
        {/* Izquierda: Formulario */}
        <div className="login-content split-left">
          <div className="login-card shadow animate-fade-in">
            <h2 className="text-center mb-4">Bienvenido</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                axios
                  .post("/tokens", {
                    email: inputEmail,
                    password: inputPassword,
                  })
                  .then(function (response) {
                    console.log(response);
                    setToken(response.data.token);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  value={inputEmail}
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                  }}
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
                Iniciar sesión
              </button>
            </form>
            <p className="text-center mt-4">
              ¿Aún no estás registrado?{" "}
              <Link to="/register" className="link-custom">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>

        {/* Derecha: Imagen de fondo con overlay */}
        <div className="login-image split-right">
          <div className="background-overlay"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
