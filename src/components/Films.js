import React from 'react';

function Films() {
  return (
    <section className="section films">
      <h1>Films</h1>
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
    </section>
  );
}

export default Films;
