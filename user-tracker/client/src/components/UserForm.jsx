// src/components/UserForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserForm({ addUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ name, email });
        setName('');
        setEmail('');
    };

    return (
        <div>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default UserForm;
