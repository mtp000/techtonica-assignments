import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 6000;


//create endpoint for weather api
app.get('/weather', (req, res) => {
  const city = req.query.cityName;
  console.log(city);
}) 









// console logs running port
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

