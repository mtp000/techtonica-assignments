//This is the minimal express server. 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import pg from 'pg';

import dotenv from 'dotenv';
dotenv.config();

import db from './db/db-connection.js';

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("My Tuyen Contact App");
  });

  db.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));


app.get('/api/contacts', async (req, res) =>{
    //console.log("Received request for contacts");
    //real connection with the DB 
    const client = await db.connect();
    //console.log(client);
    try {
        const { rows: contacts } = await client.query('SELECT * FROM contacts;');
        res.send(contacts);

    } catch (error) {
        console.error("Error fetching contacts:", error); // Log the entire error
        return res.status(400).json({ error: error.message });
    } finally {
        client.release(); // Release the client back to the pool
    }
    
})

app.get('/api/contacts/:id', async(req, res) => {
    const client = await db.connect();
    const contactID = parseInt(req.params.id, 10);

    try {
        const result = await client.query('SELECT * FROM contacts WHERE contact_id = $1', [contactID]);

        if (result.rows.length > 0) {
            res.json(result.rows[0]);  // Send the contact data if found
        } else {
            res.status(404).json({ message: 'Contact not found' });  // Return 404 if not found
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error fetching this individual contact' });
    }
});

// app.get('/test', async (req, res) => {
//     //hardcode the events response for testing reasons. This call has one more event that the real DB 
//     try{
//         const contacts = [ 
//               {id: 1, name: 'Mom', email: 'mom@gmail.com', phone: '678-233-2455', notes: 'likes fruit}' },
//               {id: 2, name: 'Dad', email: 'dad900@gmail.com', phone: '678-011-0301', notes: 'only texts'},
//               {id: 3, name: 'Michael', email: 'michaelp@gmail.com', phone: '678-532-0713', notes: 'eats everything'}
//           ];
//         res.json(contacts);

//     } catch(error){
//         console.log(error);
//     }   
// })



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));