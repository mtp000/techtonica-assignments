const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Post = require('./models/Post'); //import Post model

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());



// API endpoints

// gets all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


// get individual post based on id
app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


// post a new blog post
app.post('/write', async (req, res) => {
    const { title, author, content } = req.body;
    try {
        const newPost = await Post.create( {title, author, content} );
        res.status(201).json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


// delete a post based on id
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Post.destroy({ where: {id} });
        res.status(204).send('Post deleted.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});