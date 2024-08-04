import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchClassrooms = async () => {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.get('http://localhost:5000/api/users/me', config);
      setClassrooms(res.data.classrooms);
    };

    fetchClassrooms();
  }, [token]);

  return (
    <div>
      <h1>My Classrooms</h1>
      <ul>
        {classrooms.map(classroom => (
          <li key={classroom._id}>{classroom.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;