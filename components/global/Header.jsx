import HomeIcon from "@mui/icons-material/Home";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CallIcon from "@mui/icons-material/Call";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "../../src/style/Header.css";

// 🧠 Importamos Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItemCount,
  selectCartItems,
  removeFromCart,
} from "../../redux/cartSlice"; // ✅ incluye removeFromCart

const Header = ({ toggleCart }) => {
  const dispatch = useDispatch(); // 🧠 Inicializamos el dispatcher de Redux

  const itemCount = useSelector(selectCartItemCount); // 🎯 Cantidad total de ítems
  const cartItems = useSelector(selectCartItems); // 🛒 Productos actuales en el carrito

  return (
    <>
      <nav className="navbar px-3 header fixed-top shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand bruma" to="/">
            <img
              src="../images/logo/logo.svg"
              alt="logo bruma"
              className="container"
              style={{ userSelect: "none" }}
            />
          </Link>

          <button
            className="btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

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
              className="btn p-0 border-0 position-relative"
              onClick={toggleCart}
            >
              <ShoppingCartIcon
                className="shop-icon"
                style={{ fontSize: 30 }}
              />
              {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {itemCount}
                </span>
              )}
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header header">
                <h5 className="offcanvas-title bruma" id="offcanvasRightLabel">
                  Carrito de Compras
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                {cartItems.length === 0 ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center justify-content-between border-bottom py-2"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          width="50"
                          className="me-3"
                        />
                        <div>
                          <h6 className="mb-1">{item.title}</h6>
                          <small>Cantidad: {item.quantity}</small>
                        </div>
                      </div>
                      <div>
                        <strong>${item.price}</strong>
                        <button
                          className="btn btn-sm btn-outline-danger ms-2"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

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
          <Link className="nav-link" to="/">
            <HomeIcon className="nav-item" />
            <span className="ms-2">Inicio</span>
          </Link>
          <Link className="nav-link" to="/store">
            <CoffeeIcon className="nav-item" />
            <span className="ms-2">Tienda</span>
          </Link>
          <Link className="nav-link" to="/about">
            <CallIcon className="nav-item" />
            <span className="ms-2">Contacto</span>
          </Link>
          <Link className="nav-link" to="/login">
            <Person3Icon className="nav-item" />
            <span className="ms-2 t">Login</span>
          </Link>

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
