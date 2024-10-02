// src/components/UserDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setUser(response.data);
        };
        fetchUser();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    if (!user) return <div>User not found</div>;

    return (
        <div>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetail;

