import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
import './Navbar.css';  // Import the CSS for styling

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/">Home</Link> 
          <Link to="/art">Art</Link> {/* Updated to use Link */}
          <Link to="/films">Films</Link>
          <Link to="/story">Story</Link>
          <Link to="/me">Me</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
