// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// User class to represent a user
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

// API endpoints
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        const users = result.rows.map(row => new User(row.id, row.name, row.email));
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        const user = new User(result.rows[0].id, result.rows[0].name, result.rows[0].email);
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
