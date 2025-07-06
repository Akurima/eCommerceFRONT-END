import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Store from "../pages/store/Store";
import About from "../pages/home/AboutUs";

import "../src/style/App.css";
import "../src/style/Responsive.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/register" element={<Register />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
