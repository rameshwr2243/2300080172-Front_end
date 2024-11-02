import React from 'react';

const TourOfCampus = () => {
  return (
    <div>
      <h1>Tour of Campus</h1>
      <video width="100%" controls>
        <source src="/tourofcampus" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TourOfCampus;
