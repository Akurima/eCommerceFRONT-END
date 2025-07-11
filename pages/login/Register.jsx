import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import "../../styles/Login.css";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/users/register", {
        firstname,
        lastname,
        email,
        password,
      });

      setMessage("Usuario creado con éxito. Redirigiendo...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage(error.response?.data?.error || "Error al registrar usuario.");
    }
  };

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

            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  Nombre
                </label>
                <input
                  placeholder="Nombre"
                  type="text"
                  className="form-control input-animated"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Apellido
                </label>
                <input
                  placeholder="Apellido"
                  type="text"
                  className="form-control input-animated"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  placeholder="tu@correo.com"
                  type="email"
                  className="form-control input-animated"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  placeholder="Contraseña"
                  type="password"
                  className="form-control input-animated"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn boton w-100 btn-animated mt-3"
              >
                Registrarse
              </button>
            </form>

            {/* Mensaje de éxito o error */}
            {message && (
              <p className="mt-3 text-center text-danger">{message}</p>
            )}

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
