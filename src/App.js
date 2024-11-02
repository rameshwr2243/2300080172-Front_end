import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Courses from './components/Courses';
import Assignments from './components/Assignments';
import Timetable from './components/Timetable';
import FeedbackForm from './components/FeedbackForm';
import Campus from './components/Campus';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Register from './components/Register';
import Login from './components/Login';

const theme = createTheme({
  palette: {
    primary: { main: '#007bff' },
    secondary: { main: '#6c757d' },
  },
  typography: { fontFamily: 'Arial, sans-serif' },
});

const App = () => {
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleUserInput = () => {
    const userInput = prompt('Enter your username:');
    const typeInput = prompt('Enter your user type (e.g., Student, Faculty):');
    setUsername(userInput);
    setUserType(typeInput);
  };

  const handleDayInput = () => {
    const dayInput = prompt('Enter the day to view its timetable (e.g., Monday):');
    setSelectedDay(dayInput);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      minHeight: '100vh',
      position: 'relative',
    },
    userContainer: {
      margin: '20px 0',
      textAlign: 'center',
    },
    inputButton: {
      padding: '10px 20px',
      margin: '10px 0',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    userOutput: {
      marginTop: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ResponsiveAppBar />
        <Header />
        <div style={styles.container}>
          <div style={styles.userContainer}>
            <button style={styles.inputButton} onClick={handleUserInput}>
              Enter Username & User Type
            </button>
            <div style={styles.userOutput}>
              Username: {username} | User Type: {userType}
            </div>
          </div>
          <div style={styles.userContainer}>
            <button style={styles.inputButton} onClick={handleDayInput}>
              Enter Timetable Day
            </button>
            <div style={styles.userOutput}>Selected Day: {selectedDay}</div>
          </div>
          <div style={styles.componentContainer}>
            <Routes>
              <Route path="/" element={<div>Please select a component to view.</div>} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/student" element={<Student />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/timetable" element={<Timetable selectedDay={selectedDay} />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/campus" element={<Campus />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
