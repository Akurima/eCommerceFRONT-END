import HomeIcon from "@mui/icons-material/Home";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CallIcon from "@mui/icons-material/Call";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header px-3">
      <div className="container-fluid">
        <Link className="navbar-brand bruma" to="/">
          Bruma
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          {/* Navegación centrada */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link active-icon" to="/">
                <HomeIcon style={{ fontSize: 30 }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                <CoffeeIcon style={{ fontSize: 30 }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <CallIcon style={{ fontSize: 30 }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <Person3Icon style={{ fontSize: 30 }} />
              </Link>
            </li>
          </ul>

          {/* Search + Cart */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className="d-flex align-items-center border rounded px-2 py-1">
              <SearchIcon style={{ fontSize: 20, color: "#4b6858" }} />
              <input
                type="text"
                className="form-control border-0 ms-2 p-0"
                placeholder="Buscar"
                style={{ width: "120px", color: "#4b6858", fontSize: "0.9rem" }}
              />
            </div>
            <ShoppingCartIcon className="shop-icon" style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
