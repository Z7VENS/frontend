import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateClassroom = () => {
  const [name, setName] = useState('');
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

      const res = await axios.post('http://localhost:5000/api/classrooms', { name }, config);
      setCode(res.data.code);
      console.log('Classroom created:', res.data);
      // navigate('/dashboard'); // Optional: Uncomment if you want to navigate away
    } catch (error) {
      console.error('Create classroom error:', error.response ? error.response.data.error : error.message);
      alert('Failed to create classroom');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <div>
          <label className="block mb-2">Classroom Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <button type="submit" className="bg-purple-600 text-white p-2 rounded mt-4 hover:bg-purple-700 w-full">
          Create Classroom
        </button>
      </form>
      {code && (
        <div className="mt-6 bg-gray-800 p-4 rounded shadow-md text-center">
          <p className="text-lg">Classroom Code:</p>
          <p className="text-xl font-bold">{code}</p>
        </div>
      )}
    </div>
  );
};

export default CreateClassroom;