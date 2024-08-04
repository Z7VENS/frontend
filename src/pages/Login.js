import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      const { token } = res.data;
      console.log('Token received:', token);

      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <form onSubmit={onSubmit} className="m-auto p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={onChange} required className="w-full p-2 rounded bg-gray-700" />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={onChange} required className="w-full p-2 rounded bg-gray-700" />
        </div>
        <button type="submit" className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700">Login</button>
      </form>
    </div>
  );
};

export default Login;