import React from 'react';

const Assignments = () => {
  const assignments = [
    { dueDate: '2024-08-05', subject: 'RAIT', year: '2nd', marks: 10 },
    { dueDate: '2024-08-06', subject: 'MERN', year: '2nd', marks: 15 },
  ];

  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            {assignment.dueDate} - {assignment.subject}, Year: {assignment.year}, Marks: {assignment.marks}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Assignments;
