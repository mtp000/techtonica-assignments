// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./db/db.js'); //import sequelize instance
const User = require('./models/User'); //import user model

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sync the database: creates tables automatically based on table model
sequelize.sync().then(() => {
    console.log('Database & tables created!');
});


// API endpoints
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.create( {name, email} );
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: {id} });
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
