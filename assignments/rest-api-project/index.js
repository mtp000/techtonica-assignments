import express from 'express';
import bodyParser from 'body-parser';
import books from './books.js';
import clients from './clients.js';
import pg from 'pg';
const { Pool } = pg

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

//const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'library',
  port: 5432,
  max: 20, // maximum number of connections in the pool
  idleTimeoutMillis: 30000, //n how long a cliet is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
});


//set up database connection

//Read (GET) routes
app.get("/", (req, res) => {
  res.json("Welcome to My Tuyen's library");
});

app.get("/books", (req, appRes) => {
  pool.query('SELECT * FROM books;', (err, dataRes) => {
    if (err) {
      console.error(err);
      appRes.json({error: 'Internal Server Error' });
      return;
    }
    appRes.json(dataRes.rows);
  });
});

// app.get("/clients", (req, res) => {
//   res.json(clients);
// });


// app.get("/clients/:clientCardNumber", (req, res) => {
//   let parameters = req.params;
//   console.log(parameters);
//   let cardNumber = parameters.clientCardNumber;
//   console.log(cardNumber);
//   clients[1].name = 'zendaya holland';
//     res.json(clients);
// });

app.get("/books/:isbn", (req, appRes) => {
  let isbnNum = req.params.isbn;
  pool.query('SELECT * FROM books WHERE isbn = $1 and is_available = $2', [isbnNum, true], (err, dataRes) => {
    if (err) {
      console.error(err);
      appRes.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    appRes.json(dataRes.rows);
  });
});



//Create (POST)
app.post("/books/newreservation", async (req, res) => {
  console.log('Making new book reservation ...')

  const newBook = {
    isbn: req.body.isbn;
  }
  books.push(newBook);
  res.json(books);

})



//Update (PUT)


//Delete (DELETE)

