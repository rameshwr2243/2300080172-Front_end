import React from 'react';

const Courses = () => {
  const courses = [
    { code: '23CS06EF', name: 'MERN STACK', ltps: '0-2-3-0', credits: 4 },
    { code: '23ADSD01', name: 'AI & ML', ltps: '0-3-1-0', credits: 4 },
  ];

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.code}>
            Code: {course.code}, Name: {course.name}, LTPS: {course.ltps}, Credits: {course.credits}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Courses;
