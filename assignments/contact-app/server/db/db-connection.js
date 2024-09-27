// server/db/db-connection.js;
import pg from 'pg';
const { Pool } = pg;
const db = new Pool({
  connectionString: 'postgres://localhost:5432/contacts'
});

export default db;


//If you don't have postgres db with an user and password - 
//Replace everything between the <> with your variables and remove the <>
//DB_URL="postgresql://localhost/<database>"