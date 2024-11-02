import React from 'react';

const Feedback = ({ data }) => {
  const cardStyles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
      gap: '20px',
      padding: '20px',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    cardText: {
      fontSize: '14px',
      marginBottom: '8px',
    },
  };

  return (
    <div style={cardStyles.container}>
      {data.map((item, index) => (
        <div key={index} style={cardStyles.card}>
          <div style={cardStyles.cardTitle}>Feedback {index + 1}</div>
          <div style={cardStyles.cardText}>
            <strong>Course Name:</strong> {item.cName}
          </div>
          <div style={cardStyles.cardText}>
            <strong>Faculty:</strong> {item.fName}
          </div>
          <div style={cardStyles.cardText}>
            <strong>Communication Skills:</strong> {item.cSkills}
          </div>
          <div style={cardStyles.cardText}>
            <strong>Remarks:</strong> {item.remarks}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
