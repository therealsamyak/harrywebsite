import React, { useEffect, useState } from 'react';
import './Story.css'; // Import the CSS file

function Story() {
  const [story, setStory] = useState('');

  useEffect(() => {
    // Fetch story HTML from the Google Docs link
    fetch('https://docs.google.com/document/d/12uGS1-cfuLadOAgP5NuSI7LNtYX6IlK-VMAsnq-9SEM/export?format=html')
      .then((response) => response.text())
      .then((data) => {
        setStory(data); // Set the HTML string
      })
      .catch((error) => console.error('Error fetching story:', error));
  }, []);

  return (
    <section className="section story">
      <article
        className="story-content"
        dangerouslySetInnerHTML={{ __html: story }} // Render the HTML content
      />
    </section>
  );
}

export default Story;
