import React from 'react';

// Use require.context to dynamically load all images from the src/art_gallery folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../art_gallery', false, /\.(png|jpe?g|svg)$/));

// Helper function to extract just the filename from the full path
const getFileName = (path) => {
  return path.split('/').pop(); // Get the last part after splitting by '/'
};

// Sort images by the filename itself
const sortedImages = images.sort((a, b) => {
  const fileNameA = getFileName(a);
  const fileNameB = getFileName(b);
  return fileNameA.localeCompare(fileNameB); // Compare filenames lexicographically
});

console.log(sortedImages)

const ImageGalleryLocal = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        {sortedImages.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Art Gallery ${index + 1}`}
            className="w-full lg:w-4/5 h-auto mb-4"
            />
        ))}
    </div>
  );
};

export default ImageGalleryLocal;
