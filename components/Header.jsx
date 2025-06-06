import HomeIcon from "@mui/icons-material/Home";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CallIcon from "@mui/icons-material/Call";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header d-flex justify-content-between align-items-center px-4">
    <h2 className="bruma">Bruma</h2>
    {/* Columna vacía para separación izquierda si querés algo luego */}
    <div style={{ width: "1px" }}></div>

    {/* Íconos centrados */}
    <div className="d-flex justify-content-center align-items-center gap-4">
      <span className="icons-header active-icon">
        <Link className="nav-link" to="/">
          <HomeIcon style={{ fontSize: 35 }} />
        </Link>
      </span>
      <span className="icons-header">
        <Link className="nav-link" to="/store">
          <CoffeeIcon style={{ fontSize: 35 }} />
        </Link>
      </span>
      <span className="icons-header">
        <Link className="nav-link" to="/about">
          <CallIcon style={{ fontSize: 35 }} />
        </Link>
      </span>
      <span className="icons-header">
        <Link className="nav-link" to="/login">
          <Person3Icon style={{ fontSize: 35 }} />
        </Link>
      </span>
    </div>

    <div className="d-flex align-items-center gap-3">
      <div className="search-bar-minimal d-flex align-items-center">
        <SearchIcon
          style={{
            fontSize: 20,
            color: "#4b6858",
            marginTop: "18px",
          }}
        />
        <input
          style={{ color: "4b6858" }}
          type="text"
          className="minimal-input"
        />
      </div>
      <ShoppingCartIcon className="shop-icon" style={{ fontSize: 35 }} />
    </div>
  </header>
);

export default Header;
