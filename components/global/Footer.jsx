import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../src/style/Footer.css";

const Footer = () => (
  <footer className="text-footer py-4 mt-auto div-footer">
    <div className="container">
      <div className="row justify-content-between align-items-start">
        {/* IZQUIERDA */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h4 className="fw-bold">Bruma</h4>
          <p className="small">Café con clase, sabor artesanal.</p>
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} Bruma. Todos los derechos
            reservados.
          </p>
        </div>

        {/* DERECHA */}
        <div className="col-md-6">
          <div className="d-flex flex-column flex-md-row justify-content-md-end gap-4">
            <div>
              <h6 className="text-uppercase fw-bold mb-2">Enlaces</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/store"
                    className="text-footer text-decoration-none"
                  >
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-footer text-decoration-none"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-footer text-decoration-none"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-uppercase fw-bold mb-2">Legal</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/privacy"
                    className="text-footer text-decoration-none"
                  >
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-footer text-decoration-none"
                  >
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-uppercase fw-bold mb-2">Redes</h6>
              <div className="d-flex gap-2">
                <a href="#" className="text-footer">
                  <FacebookIcon />
                </a>
                <a href="#" className="text-footer">
                  <InstagramIcon />
                </a>
                <a href="#" className="text-footer">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
