import React from 'react';
import "./ArtGallery.css"
import ImageGallery from './ImageGallery';

function ArtGallery() {
  return (
    <section className="section art-gallery">
      <h1 className='art-title'>Art</h1>

      {/* Art */}
      <ImageGallery />
    </section>
  );
}

export default ArtGallery;
