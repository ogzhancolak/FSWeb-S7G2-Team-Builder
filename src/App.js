import React, { useState } from 'react';
import Form from './Form/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Enver', email: 'enver@example.com', role: 'Frontend Developer' },
    { id: 2, name: 'Sena', email: 'sena@example.com', role: 'Backend Developer' },
    { id: 3, name: 'İsmail', email: 'ismail@example.com', role: 'Backend Developer' },
    { id: 4, name: 'Oğuzhan', email: 'oguzhan@example.com', role: 'Backend Developer' },
    { id: 5, name: 'Gökhan', email: 'gökhan@example.com', role: 'Backend Developer' },
  ]);

  const [editingMember, setEditingMember] = useState(null);

  const editTeamMember = (member) => {
    setEditingMember(member);
  };

  const updateTeamMember = (updatedMember) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) => (member.id === updatedMember.id ? updatedMember : member))
    );
    setEditingMember(null);
  };

  const deleteTeamMember = (id) => {
    setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
  };

  // Yeni üye eklemek için fonksiyon
  const addTeamMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div>
      <h1 id='team-members'>Team Members</h1>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {member.name} - {member.role}
            <button onClick={() => editTeamMember(member)}>Edit</button>
            <button onClick={() => deleteTeamMember(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingMember ? (
        <Form
          addTeamMember={addTeamMember}
          member={editingMember}
          updateTeamMember={updateTeamMember}
        />
      ) : (
        <Form addTeamMember={addTeamMember} />
      )}
    </div>
  );
}

export default App;