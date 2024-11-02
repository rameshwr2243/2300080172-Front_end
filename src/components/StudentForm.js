import { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/students/register', {
                name,
                age,
                course,
            });
            setMessage('Student registered successfully');
        } catch (error) {
            setMessage('Error registering student: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" required />
            <button type="submit">Register Student</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default StudentForm;
