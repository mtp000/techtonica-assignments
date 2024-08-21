import express from 'express';
import bodyParser from 'body-parser';
import books from './books.js';
import clients from './clients.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/clients", (req, res) => {
  res.json(clients);
});

app.get("/api/clients/:clientCardNumber", (req, res) => {
let cardNumber = req.params.clientCardNumber;
clients[1].name = 'zendaya holland';
  res.json(clients);
});