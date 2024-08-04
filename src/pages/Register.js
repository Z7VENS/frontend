import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student'
  });

  const navigate = useNavigate();

  const { username, email, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      navigate('/login'); // Redirige al login después del registro exitoso
    } catch (error) {
      console.error(error.response.data.msg);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <form onSubmit={onSubmit} className="m-auto p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={onChange} required className="w-full p-2 rounded bg-gray-700" />
        </div>
        <div className="mb-4">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={onChange} required className="w-full p-2 rounded bg-gray-700" />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={onChange} required className="w-full p-2 rounded bg-gray-700" />
        </div>
        <div className="mb-4">
          <label>Role:</label>
          <select name="role" value={role} onChange={onChange} className="w-full p-2 rounded bg-gray-700">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700">Register</button>
      </form>
    </div>
  );
};

export default Register;