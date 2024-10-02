// src/components/UserList.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users, deleteUser }) {
    return (
        <div>
            <h1>Users</h1>
            {/* Button styled Link */}
            <Link to="/add-user" style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        marginLeft: '10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: '5px'
                    }}>
                        Add User
                    </Link>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
