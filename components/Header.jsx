import HomeIcon from "@mui/icons-material/Home";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CallIcon from "@mui/icons-material/Call";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => (
  <header className="header d-flex justify-content-between align-items-center px-4">
    {/* Columna vacía para separación izquierda si querés algo luego */}
    <div style={{ width: "200px" }}></div>

    {/* Íconos centrados */}
    <div className="d-flex justify-content-center align-items-center gap-4">
      <span className="icons-header active-icon">
        <HomeIcon style={{ fontSize: 35 }} />
      </span>
      <span className="icons-header">
        <CoffeeIcon style={{ fontSize: 35 }} />
      </span>
      <span className="icons-header">
        <CallIcon style={{ fontSize: 35 }} />
      </span>
      <span className="icons-header">
        <Person3Icon style={{ fontSize: 35 }} />
      </span>
    </div>

    <div className="d-flex align-items-center gap-3">
      <div className="search-bar-minimal d-flex align-items-center">
        <SearchIcon
          style={{
            fontSize: 20,
            color: "#e7dac8",
            marginTop: "18px",
          }}
        />
        <input type="text" className="minimal-input" />
      </div>
      <ShoppingCartIcon className="shop-icon" style={{ fontSize: 35 }} />
    </div>
  </header>
);

export default Header;
