import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>KL University</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Header;
