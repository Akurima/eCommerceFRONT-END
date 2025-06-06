const Footer = () => (
  <footer className="div-footer text-footer py-4 mt-auto">
    <div className="container text-center">
      <p className="mb-1">
        &copy; {new Date().getFullYear()} Bruma. All rights reserved.
      </p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="/privacy" className="text-footer text-decoration-none">
            Politica de privacidad
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/terms" className="text-footer text-decoration-none">
            Terminos de servicio
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/contact" className="text-footer text-decoration-none">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
