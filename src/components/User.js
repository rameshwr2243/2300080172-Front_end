import React from 'react';
const User = ({ username, userType }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Logged in as: {username}</p>
      <p>User Type: {userType}</p>
    </div>
  );
};
export default User;
