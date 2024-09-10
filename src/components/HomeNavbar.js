// src/components/HomeNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css'; // Custom CSS for navbar

function HomeNavbar() {
  return (
    <nav className="home-navbar">
      <ul className="navbar-links">
        <li><Link to="/art">ART</Link></li>
        <li><Link to="/films">FILMS</Link></li>
        <li><Link to="/story">STORY</Link></li>
        <li><Link to="/me">ME</Link></li>
      </ul>
    </nav>
  );
}

export default HomeNavbar;
