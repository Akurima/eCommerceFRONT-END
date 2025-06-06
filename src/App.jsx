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
      </Routes>
    </Router>
  );
}

export default App;
