import React, { useState } from 'react';
import axios from 'axios';

const FacultyForm = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newFaculty = { name, id, designation, department };
      const response = await axios.post('http://localhost:5000/api/faculty', newFaculty); // Update with your actual API endpoint
      setMessage(`Faculty member ${response.data.name} added successfully!`);
      // Clear the form after submission
      setName('');
      setId('');
      setDesignation('');
      setDepartment('');
    } catch (err) {
      setMessage('Failed to add faculty member.'); // Handle the error appropriately
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Faculty Member</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Add Faculty</button>
      </form>
      {message && <div style={styles.message}>{message}</div>}
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default FacultyForm;
