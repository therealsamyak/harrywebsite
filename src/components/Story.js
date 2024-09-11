import React, { useEffect, useState } from 'react';
import './Story.css'; // Import the CSS file

function Story() {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Fetch story HTML from the Google Docs link
    fetch('https://docs.google.com/document/d/12uGS1-cfuLadOAgP5NuSI7LNtYX6IlK-VMAsnq-9SEM/export?format=html')
      .then((response) => response.text())
      .then((data) => {
        setStory(data); // Set the HTML string
        setLoading(false); // Set loading to false after the fetch
      })
      .catch((error) => {
        console.error('Error fetching story:', error);
        setLoading(false); // Stop loading if an error occurs
      });
  }, []);

  return (
    <section className="section story">
      {loading ? (
        <span class="loader"></span> // Render loading spinner while fetching
      ) : (
        <>
          <h1 className="story-title">Story</h1> {/* Add the title */}
          <article
            className="story-content"
            dangerouslySetInnerHTML={{ __html: story }} // Render the HTML content
          />
        </>
      )}
    </section>
  );
}

export default Story;
