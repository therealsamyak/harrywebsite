import React from 'react';
import './Footer.css'; // Import a CSS file for footer styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faSoundcloud, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import icons from FontAwesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* Instagram Link */}
        <a href="https://www.instagram.com/hharryross/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>

        {/* YouTube Link */}
        <a href="https://www.youtube.com/@thescrewsareneatlyfastened" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </a>

        {/* SoundCloud Link */}
        <a href="https://on.soundcloud.com/doNMECbvuH7BeGhx9" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSoundcloud} className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
