// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS for styling
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Your Logo</a>
        <ul className="nav-links">
          <li><a href="#personalized-tracking">Personalized Tracking</a></li>
          <li><Link to="/eaushadi">E-Aushadi</Link></li>
          <li><a href="#community">Community</a></li>
          <li><Link to="/appointment">Doctor Consultation</Link></li>
          <li><a href="#chatbot">ChatBot</a></li>
          <li><a href="#disease">Disease</a></li>
          <li><a href="#rural-area">Jana Seva Kendra</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
