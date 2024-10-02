// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    };

    const addUser = async () => {
        const response = await axios.post('http://localhost:5000/users', { name, email });
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>User Tracker</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
