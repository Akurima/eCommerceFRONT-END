import HomeIcon from "@mui/icons-material/Home";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CallIcon from "@mui/icons-material/Call";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "../../src/style/Header.css";

const Header = ({ toggleCart }) => {
  return (
    <>
      <nav className="navbar px-3 header fixed-top shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand bruma" to="/">
            Bruma
          </Link>

          {/* Hamburguesa visible solo en móvil */}
          <button
            className="btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navegación visible solo en desktop */}
          <ul className="nav navbar-nav mx-auto d-none d-lg-flex flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <HomeIcon className="nav-item" style={{ fontSize: 30 }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                <CoffeeIcon className="nav-item" style={{ fontSize: 30 }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <CallIcon className="nav-item" style={{ fontSize: 30 }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <Person3Icon className="nav-item" style={{ fontSize: 30 }} />
              </Link>
            </li>
          </ul>

          {/* Búsqueda y carrito solo en desktop */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <div className="search-bar-minimal d-none d-lg-flex align-items-center">
              <SearchIcon style={{ fontSize: 20, color: "#4b6858" }} />
              <input
                type="text"
                className="minimal-input"
                placeholder="Buscar productos"
              />
            </div>
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              className="btn p-0 border-0"
              onClick={toggleCart}
            >
              <ShoppingCartIcon
                className="shop-icon"
                style={{ fontSize: 30 }}
              />
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header header">
                <h5 class="offcanvas-title bruma" id="offcanvasRightLabel">
                  Carrito de Compras
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas para móvil */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header header">
          <h5 id="mobileMenuLabel">Menú</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <Link className="nav-link" to="/" data-bs-dismiss="offcanvas">
            <HomeIcon /> <span className="ms-2">Inicio</span>
          </Link>
          <Link className="nav-link" to="/store" data-bs-dismiss="offcanvas">
            <CoffeeIcon /> <span className="ms-2">Tienda</span>
          </Link>
          <Link className="nav-link" to="/about" data-bs-dismiss="offcanvas">
            <CallIcon /> <span className="ms-2">Contacto</span>
          </Link>
          <Link className="nav-link" to="/login" data-bs-dismiss="offcanvas">
            <Person3Icon /> <span className="ms-2">Login</span>
          </Link>

          {/* Búsqueda y carrito visibles solo en offcanvas móvil */}
          <div className="d-flex align-items-center border rounded px-2 py-1 mt-3">
            <SearchIcon style={{ fontSize: 20, color: "#4b6858" }} />
            <input
              type="text"
              className="form-control border-0 ms-2 p-0"
              placeholder="Buscar"
              style={{ width: "100%", color: "#4b6858", fontSize: "0.9rem" }}
            />
          </div>
          <button
            className="btn p-0 border-0 align-self-start mt-2"
            onClick={() => {
              toggleCart();
              document.querySelector("#mobileMenu")?.classList.remove("show");
              document.querySelector(".offcanvas-backdrop")?.remove();
              document.body.classList.remove("offcanvas-backdrop");
            }}
          >
            <ShoppingCartIcon className="shop-icon" style={{ fontSize: 30 }} />
            <span className="ms-2">Carrito</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
