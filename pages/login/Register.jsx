import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/global/Footer';
import Header from '../../components/global/Header';
import '../../styles/Login.css';

const Register = () => {
  return (
    <>
    <Header />
    <div className="login-wrapper">
      <div className="background-overlay"></div>
      <div className="d-flex justify-content-center align-items-center login-content">
        <div className="login-card shadow animate-fade-in">
          <h2 className="text-center mb-4">Crear cuenta</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control input-animated" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control input-animated" id="password" />
            </div>
            <button type="submit" className="btn btn-primary w-100 btn-animated mt-3">
              Registrarse
            </button>
          </form>
          <p className="text-center mt-4">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="link-custom">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Register;
