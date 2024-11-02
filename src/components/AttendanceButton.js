import React, { useState } from 'react';

const AttendanceButton = () => {
  const [status, setStatus] = useState("Present");
  const [color, setColor] = useState("green");

  const toggleStatus = () => {
    if (status === "Present") {
      setStatus("Absent");
      setColor("red");
    } else {
      setStatus("Present");
      setColor("green");
    }
  };

  return (
    <button style={{ backgroundColor: color, padding: '5px 10px', margin: '5px' }} onClick={toggleStatus}>
      {status}
    </button>
  );
};

export default AttendanceButton;
