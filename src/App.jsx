import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Store from "../pages/store/Store";
import About from "../pages/home/AboutUs";
import Perfil from "../components/Perfil";
import PrivateRoute from "../routes/PrivateRoute";

import "../src/style/App.css";
import "../src/style/Responsive.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />

        {/* 🛡️ Ruta protegida */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
