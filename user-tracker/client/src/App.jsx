// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    };

    const addUser = async (newUser) => {
        const response = await axios.post('http://localhost:5000/users', newUser);
        setUsers([...users, response.data]);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <Router>
            <div>
                
                <Routes>
                    <Route path="/" element={<UserList users={users} deleteUser={deleteUser} />} />
                    <Route path="/add-user" element={<UserForm addUser={addUser} />} />
                    <Route path="/users/:id" element={<UserDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
