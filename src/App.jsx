import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login"
import Register from '../pages/login/Register';

import "./App.css";

function App() {

  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
