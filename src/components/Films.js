import React, { useEffect, useState } from 'react';

function Films() {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/document/d/13dioHJ_f1XOLq-ihJcOXvvS3-VgzdpAJN6GB4-bBjDU/export?format=txt'
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const text = await response.text();

        // Parse the YouTube URLs from the fetched text content
        const urls = text
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => line.includes('youtube.com') || line.includes('youtu.be'))
          .map((url) => {
            if (url.includes('watch?v=')) {
              // Extract the video ID and any additional parameters
              const [baseUrl, params] = url.split('?');
              const videoId = new URLSearchParams(params).get('v');
              const timeParam = params.includes('t=') ? `?${params.split('&').filter(p => p.includes('t=')).join('&')}` : '';
              return `https://www.youtube.com/embed/${videoId}${timeParam}`;
            }
            return url.replace('youtu.be/', 'www.youtube.com/embed/');
          });

        setVideoUrls(urls);
      } catch (error) {
        console.error('Error fetching video URLs:', error);
      }
    };

    fetchVideoUrls();
  }, []);

  return (
    <section className="section films">
      {/* Responsive Embedded YouTube Videos */}
      {videoUrls.length > 0 ? (
        videoUrls.map((url, index) => (
          <div className="video-container" key={index}>
            <iframe
              src={url}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </section>
  );
}

export default Films;
