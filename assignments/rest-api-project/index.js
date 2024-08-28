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

//set up database connection
const pool = new Pool({
  host: 'localhost',
  database: 'library',
  port: 5432,
  max: 20, // maximum number of connections in the pool
  idleTimeoutMillis: 30000, //n how long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
});



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

// app.get("/books/:title", (req, appRes) => {
//   let title = req.params.title;
//   pool.query('SELECT * FROM books WHERE title = $1 and is_available = $2', [title, true], (err, dataRes) => {
//     if (err) {
//       console.error(err);
//       appRes.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     appRes.json(dataRes.rows);
//   });
// });


app.post("/books/newbook", async (req, res) => {
  console.log(req);
  const isbn = req.body[0].isbn;
  const title = req.body[0].title;
  const author = req.body[0].author;
  const last_reserved_at = req.body[0].last_reserved_at;
  const is_available = req.body[0].is_available;
  console.log(isbn, title, author, last_reserved_at, is_available);
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


//Delete (DELETE)
app.delete ("/books/delete", async (req, res) => {
try {
  console.log(req);
  const isbn = req.body[0].isbn;
  console.log(isbn);

    let result;
    if (isbn === null) {
      // Handle the case where the ISBN is null
      result = await pool.query(
        "DELETE FROM books WHERE isbn IS NULL"
      );
    } else {
      // Handle the case where the ISBN is not null
      result = await pool.query(
        "DELETE FROM books WHERE isbn = $1",
        [isbn]
      );
    }

    res.send('Book has been deleted');
  }  catch (err) {
    res.send(err.message);
  }
});



//Put (UPDATE)
app.put("/books/reservebook", async (req, res) => {
  const isbn = req.body[0].isbn;
  const last_reserved_at = req.body[0].last_reserved_at;

  // get the book resrevation
  try {
    const result = await pool.query(
      "UPDATE books SET last_reserved_at=$1, is_available=$2 WHERE isbn= $3 RETURNING *",
      [last_reserved_at, false, isbn]
    );
  //returns error if book reservation doesn't exist
    if (result.rowCount === 0) {
      return res.status(404).send('Book reservation not found');
    }
    res.send('Book reservation has been updated');
  } catch (err) {
    res.send(err.message);
  }
});

