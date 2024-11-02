import React from 'react';
import AttendanceButton from './AttendanceButton';

const Student = () => {
  const studentDetails = [
    { id: '2300035001', name: 'ANEESH', branch: 'Computer Science', year: '2ND' },
    { id: '2300035172', name: 'KARTHIK', branch: 'ECE', year: '2ND' },
    { id: '2300080172', name: 'RAM', branch: 'Electrical', year: '2ND' },
    { id: '2300035364', name: 'AMAR', branch: 'Civil', year: '4TH' },
    { id: '23000353256', name: 'AMAN', branch: 'Chemical', year: '2ND' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Students</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td><AttendanceButton /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  header: {
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
};

export default Student;
