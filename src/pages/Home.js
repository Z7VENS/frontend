import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-500">Welcome to ZCODE</h1>
        <button onClick={handleLogin} className="bg-purple-600 text-white p-4 rounded mb-4 hover:bg-purple-700">
          Login
        </button>
        <button onClick={handleRegister} className="bg-purple-600 text-white p-4 rounded hover:bg-purple-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;