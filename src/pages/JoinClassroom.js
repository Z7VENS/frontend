import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JoinClassroom = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post(`http://localhost:5000/api/classrooms/${code}/join`, {}, config);
      console.log('Joined classroom:', res.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Join classroom error:', error.response ? error.response.data.error : error.message);
      alert('Failed to join classroom');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <div>
          <label className="block mb-2">Classroom Code:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <button type="submit" className="bg-purple-600 text-white p-2 rounded mt-4 hover:bg-purple-700 w-full">
          Join Classroom
        </button>
      </form>
    </div>
  );
};

export default JoinClassroom;