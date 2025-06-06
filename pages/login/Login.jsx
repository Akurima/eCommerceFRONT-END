
import '../../styles/Login.css';
import Footer from '../../components/global/Footer';
import Header from '../../components/global/Header';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <Header />
  <div className="login-wrapper">
      <div className="background-overlay"></div>
      <div className="d-flex justify-content-center align-items-center login-content">
        <div className="login-card shadow animate-fade-in">
          <h2 className="text-center mb-4">Bienvenido</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control input-animated" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control input-animated" id="password" />
            </div>
            <button type="submit" className="btn boton w-100 btn-animated mt-3">
              Iniciar sesión
            </button>
          </form>
          <p className="text-center mt-4">
            ¿Aún no estás registrado?{' '}
            <Link to="/register" className="link-custom">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
