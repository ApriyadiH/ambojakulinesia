// Import library
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/Food/region/:region">Region</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;