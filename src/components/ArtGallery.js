import React from 'react';
import "./ArtGallery.css"

function ArtGallery() {
  return (
    <section className="section art-gallery">
      <h1>Art Gallery</h1>

      {/* Responsive Embedded YouTube Video */}
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Art */}
    </section>
  );
}

export default ArtGallery;
