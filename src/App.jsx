import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login"
import Register from '../pages/login/Register';

import "./App.css";
import About from "../pages/home/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
=======
        <Route path="/About" element={<About />} />
>>>>>>> 78f9a0c89fbf8abbe0a1809e4a8de026f362386d
      </Routes>
    </Router>
  );
}

export default App;
