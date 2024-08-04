import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get('http://localhost:5000/api/users/me', config);
        setUser(res.data);
      } catch (error) {
        console.error(error.response ? error.response.data.msg : error.message);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <nav>
          <ul>
            <li className="mb-4"><a href="/profile" className="hover:underline">Mi Perfil</a></li>
            <li className="mb-4"><a href="/settings" className="hover:underline">Configuraciones</a></li>
            <li className="mb-4"><a href="/help" className="hover:underline">Ayuda</a></li>
            <li className="mb-4"><a href="/history" className="hover:underline">Historial</a></li>
            <li className="mb-4"><a href="/classrooms" className="hover:underline">Mis Classrooms</a></li>
            <li className="mb-4"><a href="/repository" className="hover:underline">Mi Repositorio</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg mb-5">Welcome, {user.username}</p>
        {user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;