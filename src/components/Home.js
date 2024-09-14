// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the combined CSS for the Home component

function Home() {
  return (
    <div className="home-container">
      <h1 class="home-title">WRATHFULPEST13</h1>
      
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/homepage.png'}
          alt="Artistic Home"
          className="homepage-image"
        />
      </div>

      <nav className="home-navbar">
        <ul className="homenavbar-links">
          <li><Link to="/art">ART</Link></li>
          <li><Link to="/films">FILMS</Link></li>
          <li><Link to="/story">STORY</Link></li>
          <li><Link to="/me">ME</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
