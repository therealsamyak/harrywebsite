// src/components/Home.js
import React from 'react';
import './Home.css'; // Custom CSS file for styling
import HomeNavbar from './HomeNavbar'; // Importing HomeNavbar component

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">WRATHFULPEST13</h1>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/images/your-image-name.jpg'} alt="Artistic Home" className="homepage-image" />
      </div>
      
      {/* Replace the static text with HomeNavbar for "ART FILMS STORY ME" */}
      <HomeNavbar />

    </div>
  );
}

export default Home;
