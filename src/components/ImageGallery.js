import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; // Your Google API key
  const FOLDER_ID = process.env.REACT_APP_ART_FOLDER_ID; // Your folder ID

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = encodeURIComponent(`'${FOLDER_ID}' in parents`);
        const response = await fetch(
          `https://www.googleapis.com/drive/v2/files?q=${query}&key=${API_KEY}&fields=items(id,title,mimeType,downloadUrl,embedLink,alternateLink)`
        );
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
    
        if (!data.items || data.items.length === 0) {
          console.error('No files found in the response.');
          return;
        }
    
        // Filter for only image files
        const imageFiles = data.items.filter(file => file.mimeType.includes('image/'));
    
        // Generate direct URLs for the images using the `downloadUrl` if available, or the `embedLink` as a fallback
        const urls = imageFiles.map(file => {
          // Use `downloadUrl` if it's present, otherwise fall back to `embedLink` or `alternateLink`
          const url = file.downloadUrl ? 
            `${file.downloadUrl}&key=${API_KEY}` : 
            (file.embedLink || file.alternateLink);
          return url;
        });

        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [API_KEY, FOLDER_ID]);

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} style={{ width: '80%', height: 'auto', marginBottom: '10px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;
