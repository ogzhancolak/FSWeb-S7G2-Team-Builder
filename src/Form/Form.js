import React, { useState, useEffect } from 'react';
import './Form.css'

const Form = ({ addTeamMember, member, updateTeamMember }) => {
  const [editing, setEditing] = useState(false);
  const [memberData, setMemberData] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (member) {
      setEditing(true);
      setMemberData(member);
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateTeamMember({ ...memberData, id: member.id });
    } else {
      addTeamMember({ ...memberData, id: Date.now() });
    }
    setMemberData({ name: '', email: '', role: '' });
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='text-name'
        type="text"
        name="name"
        value={memberData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input className='text-email'
        type="email"
        name="email"
        value={memberData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input className='text-role'
        type="text"
        name="role"
        value={memberData.role}
        onChange={handleChange}
        placeholder="Role"
        required
      />
      <button type="submit">{editing ? 'Update' : 'Add Team Member'}</button>
    </form>
  );
};

export default Form;