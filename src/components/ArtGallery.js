import React from 'react';
import "./ArtGallery.css"
import ImageGalleryLocal from './ImageGalleryLocal';

function ArtGallery() {
  return (
    <section className="section art-gallery">
      <h1 className='art-title'>Art</h1>

      {/* Art */}
      <ImageGalleryLocal/>
    </section>
  );
}

export default ArtGallery;
