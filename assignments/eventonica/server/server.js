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
    res.json("Hello Techtonica 2023 H2 to your Server for Eventonica");
  });


app.get('/events', async (req, res) =>{
    //real connection with the DB eventonica
    try{
      const { rows: events } = await db.query('SELECT * FROM events');
      console.log({ events})
      res.send(events);

    } catch(error){
      console.log(error);
      return res.status(400).json({error});
    }
})

app.post('/events/edit', async (req, res) => {
  /*syntax for accessing req.body is for array of objects*/
  console.log(req.body);
  const title = req.body[0].title;
  const location = req.body[0].location;
  console.log(title, location);
  try { 
    const result = await db.query(
      `INSERT INTO events (title, location)
      VALUES ($1, $2)
      RETURNING *`, [title, location]
    );

    /* pg library for Node.js always returns result of query as object with properties, one of which being rows */
    //newEvent is now an object with properties title, location (columns from the events table)
    const newEvent = result.rows[0]; //[0] accesses first event from rows array
    res.status(201).json({
      message: `New Event: ${newEvent.title} added`,
      event: newEvent
    });
  } 
  
  catch(error) {
    console.log(error);
    return res.status(400).json({error});
  }
})


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));