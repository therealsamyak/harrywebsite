import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
import './Navbar.css';  // Import the CSS for styling

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">WRATHFULPEST13</div>
        <div className="navbar-links">
          <Link to="/">ART GALLERY</Link> {/* Updated to use Link */}
          <Link to="/films">FILMS</Link>
          <Link to="/me">"Me"</Link>
          <a
            href="https://linktr.ee/wrathfulpest13"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-button"
          >
            Linktree
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
