import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
dotenv.config();
import fetch from 'node-fetch';
//import .env file //add file to .gitignore

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 6100;


app.get('/', (req, res) => {
    res.json({ message: `My Tuyen's Weather App using ExpressJS and API Key`});
  });

//create endpoint for weather api
app.get('/weather', (req, res) => {
  const city = req.query.cityName;
  //create .env file to store api key
  const apiKey = process.env.API_KEY;
  const params = new URLSearchParams ({
    q: city,
    appid: process.env.API_KEY,
    units: "metric",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
}); 






// console logs running port
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

