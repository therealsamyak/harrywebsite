import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
import './Navbar.css';  // Import the CSS for styling

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">WRATHFULPEST13</div>
        <div className="navbar-links">
          <Link to="/">Art Gallery</Link> {/* Updated to use Link */}
          <Link to="/films">Films</Link>
          <Link to="/me">Story</Link>
          <a
            href="https://linktr.ee/wrathfulpest13"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-button"
          >
            Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
