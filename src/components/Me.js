import React from 'react';
import './Me.css'; // Import the CSS file for styles

function Me() {
  return (
    <section className="section me">
      {/* <h1 className="me-title">Me</h1> */}
      <div className="me-content">
        <img src={process.env.PUBLIC_URL + '/images/mepicture.jpg'} alt="Harry Ross" className="me-image" />
        <p className="me-description">
          My name is Harry Ross. I write clean choppy concise sentences. I believe in the phenomenon of grace and the sanctity of writing.
        </p>
        <a href="https://linktr.ee/hharryross" className="me-link" target="_blank" rel="noopener noreferrer">
          https://linktr.ee/hharryross
        </a>
      </div>
    </section>
  );
}

export default Me;
