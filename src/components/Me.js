import React from 'react';
import './Me.css'; // Import the CSS file for styles

function Me() {
  return (
    <section className="section me">
      {/* <h1 className="me-title">Me</h1> */}
      <div className="me-content grid grid-rows-3 gap-3 w-full">
        <img
          src={process.env.PUBLIC_URL + '/images/mepicture.jpeg'}
          alt="Harry Ross"
          className="w-full h-auto object-cover"
        />
        <p className="me-description w-full text-center">
          My name is Harry Ross. I write clean choppy concise sentences. I believe in the phenomenon of grace and the sanctity of writing.
        </p>
        <a
          href="https://linktr.ee/hharryross"
          className="me-link w-full text-center text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://linktr.ee/hharryross
        </a>
      </div>

    </section>
  );
}

export default Me;
