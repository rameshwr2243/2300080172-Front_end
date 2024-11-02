import React from 'react';

const Campus = () => {
  const images = [
    '/server/public/campus.jpg',
  ];

  const styles = {
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div>
      <h1>Campus Gallery</h1>
      <div style={styles.gallery}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Campus ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default Campus;
