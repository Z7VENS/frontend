import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubGroupList = ({ classroomId }) => {
  const [subGroups, setSubGroups] = useState([]);
  const [name, setName] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSubGroups = async () => {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.get(`http://localhost:5000/api/classrooms/${classroomId}`, config);
      setSubGroups(res.data.subGroups);
    };

    fetchSubGroups();
  }, [classroomId, token]);

  const handleCreateSubGroup = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const res = await axios.post(`http://localhost:5000/api/classrooms/${classroomId}/subgroups`, { name }, config);
    setSubGroups(res.data.subGroups);
  };

  return (
    <div>
      <h2>SubGroups</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New SubGroup Name" />
      <button onClick={handleCreateSubGroup}>Create SubGroup</button>
      <ul>
        {subGroups.map(subGroup => (
          <li key={subGroup._id}>{subGroup.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubGroupList;