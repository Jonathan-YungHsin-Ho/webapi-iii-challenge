import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/users')
      .then(res => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='users-list'>
      <h2>List of Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <p>{user.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
