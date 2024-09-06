import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API I saving one response in a .js file 
import fakedata  from './fakedata.js';

const app = express();
const PORT = 5001;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("My Tuyen's Trivia Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 
app.get("/quiz", async (req,res) => {
  let dataObj;
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=boolean");
    const dataObj = await response.json();
    console.log(dataObj);
  } catch(error) {
    console.log("error:", error);
  }
  res.send(dataObj);
});


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/quiz/fake', (req, res) =>{
    res.json(fakedata);
})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));