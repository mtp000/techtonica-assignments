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

app.get("/books/:title", (req, appRes) => {
  let title = req.params.title;
  pool.query('SELECT * FROM books WHERE title = $1 and is_available = $2', [title, true], (err, dataRes) => {
    if (err) {
      console.error(err);
      appRes.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    appRes.json(dataRes.rows);
  });
});




app.post("/books/newbook",async (req, res) => {
  const { isbn, title, author, last_reserved_at, is_available } = req.body;
  try {

    const result = await pool.query(
      "INSERT INTO books (isbn, title, author, last_reserved_at, is_available) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [isbn, title, author, last_reserved_at, is_available]
    );
    const newBook = result.rows; 
    res.send('New book added');
  } 
  catch (err) {
    res.json({error: 'Internal Server Error' });
  }
});




// app.post("/books/newreservation", async (req, appRes) => {
//   console.log('Making new book reservation ...')

//     const newBook = req.body;

//       pool.query('SELECT * FROM books WHERE is_available = true;', (err, dataRes) => {
//       if (err) {
//         console.error(err);
//         appRes.status(500).json({ error: 'Error making reservation' });
//         return;
//       }
//       appRes.json(dataRes.rows);
//     });

// });

//Update (PUT)
// app.put("/books/reservebook", async (req, res) => {

// })

// //Delete (DELETE)
// app.delete("/books/delete")

