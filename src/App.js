import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateClassroom from './pages/CreateClassroom';
import JoinClassroom from './pages/JoinClassroom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-classroom" element={<CreateClassroom />} />
        <Route path="/join-classroom" element={<JoinClassroom />} />
      </Routes>
    </Router>
  );
};

export default App;