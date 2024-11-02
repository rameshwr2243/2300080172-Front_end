import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Faculty = () => {
  const [facultyDetails, setFacultyDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty'); 
        setFacultyDetails(response.data);
      } catch (err) {
        setError('Failed to fetch faculty details.');
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Faculty</h2>
      <div style={styles.cardContainer}>
        {facultyDetails.map((faculty) => (
          <div key={faculty.id} style={styles.card}>
            <h3>{faculty.name}</h3>
            <p>ID: {faculty.id}</p>
            <p>Designation: {faculty.designation}</p>
            <p>Department: {faculty.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default Faculty;
