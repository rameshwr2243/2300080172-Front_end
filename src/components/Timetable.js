import React, { useState } from 'react';

const Timetable = ({ selectedDay }) => {
  const timetableData = {
    monday: [
      { time: '9:20 - 11:00', hours: '1-2', subject: 'DSS', room: 'C101', LTPS: 'Lecture' },
      { time: '11:10 - 12:50', hours: '3-4', subject: 'DAV', room: 'C302', LTPS: 'Skill' },
      { time: '1:45 - 3:20', hours: '6-7', subject: 'AI&ML', room: 'R203', LTPS: 'Practical' },
      { time: '3:30 - 5:20', hours: '8-9', subject: 'MSWD', room: 'C017', LTPS: 'Practical' },
    ],
    tuesday: [
      { time: '9:20 - 11:00', hours: '1-2', subject: 'RAIT', room: 'C101', LTPS: 'Lecture' },
      { time: '11:10 - 12:50', hours: '3-4', subject: 'DSS', room: 'R102', LTPS: 'Tutorial' },
      { time: '1:45 - 3:20', hours: '6-7', subject: 'DAV', room: 'R103', LTPS: 'Skill' },
      { time: '3:30 - 5:20', hours: '8-9', subject: 'AI&ML', room: 'F104', LTPS: 'Practical' },
    ],
    wednesday: [
      { time: '9:20 - 11:00', hours: '1-2', subject: 'MSWD', room: 'R101', LTPS: 'Practical' },
      { time: '11:10 - 12:50', hours: '3-4', subject: 'RAIT', room: 'C102', LTPS: 'Lecture' },
      { time: '1:45 - 3:20', hours: '6-7', subject: 'DSS', room: 'F103', LTPS: 'Lecture' },
      { time: '3:30 - 5:20', hours: '8-9', subject: 'DAV', room: 'L104', LTPS: 'Practical' },
    ],
    thursday: [
      { time: '9:20 - 11:00', hours: '1-2', subject: 'AI&ML', room: 'R101', LTPS: 'Lecture' },
      { time: '11:10 - 12:50', hours: '3-4', subject: 'MSWD', room: 'C102', LTPS: 'Practical' },
      { time: '1:45 - 3:20', hours: '6-7', subject: 'RAIT', room: 'F103', LTPS: 'Lecture' },
      { time: '3:30 - 5:20', hours: '8-9', subject: 'DSS', room: 'L104', LTPS: 'Lecture' },
    ],
    friday: [
      { time: '9:20 - 11:00', hours: '1-2', subject: 'DAV', room: 'S101', LTPS: 'Practical' },
      { time: '11:10 - 12:50', hours: '3-4', subject: 'AI&ML', room: 'C102', LTPS: 'Lecture' },
      { time: '1:45 - 3:20', hours: '6-7', subject: 'MSWD', room: 'R103', LTPS: 'Practical' },
      { time: '3:30 - 5:20', hours: '8-9', subject: 'RAIT', room: 'L104', LTPS: 'Lecture' },
    ],
    saturday: [
      { time: '9:20 - 11:00', hours: '1-2', subject: 'MSWD', room: 'C102', LTPS: 'Skill' },
      { time: '11:10 - 12:50', hours: '3-4', subject: 'DSS', room: 'L108', LTPS: 'Practical' },
      { time: '1:45 - 3:20', hours: '6-7', subject: 'DAV', room: 'R302', LTPS: 'Lecture' },
      { time: '3:30 - 5:20', hours: '8-9', subject: 'CTOD', room: 'S716', LTPS: 'Skill' },
    ],
  };

  const [filterText, setFilterText] = useState(selectedDay.toLowerCase());

  const handleInputChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const filterData = () => {
    const dayData = timetableData[filterText];
    return dayData || [];
  };

  const filteredTimetable = filterData();

  return (
    <div style={styles.container}>
      <h2>Timetable</h2>
      <input
        type="text"
        placeholder="Enter day (e.g., Monday)"
        value={filterText}
        onChange={handleInputChange}
        style={styles.inputBox}
      />
      {filteredTimetable.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Time</th>
              <th style={styles.tableHeader}>Subject</th>
              <th style={styles.tableHeader}>Hour</th>
              <th style={styles.tableHeader}>Room</th>
              <th style={styles.tableHeader}>LTPS</th>
            </tr>
          </thead>
          <tbody>
            {filteredTimetable.map((entry, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{entry.time}</td>
                <td style={styles.tableCell}>{entry.subject}</td>
                <td style={styles.tableCell}>{entry.hours}</td>
                <td style={styles.tableCell}>{entry.room}</td>
                <td style={styles.tableCell}>{entry.LTPS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes available for the entered day.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    textAlign: 'center',
  },
  inputBox: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '60%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: '1px solid #ccc',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

export default Timetable;
