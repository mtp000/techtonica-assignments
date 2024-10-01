// server/db/db-connection.js;
import pg from 'pg';
const { Pool } = pg;

const db = new Pool({
    user: 'postgres',  // Check this value
    host: 'localhost',
    database: 'contacts',
    password: 'your_password',
    port: 5432,
});


export default db;


//If you don't have postgres db with an user and password - 
//Replace everything between the <> with your variables and remove the <>
//DB_URL="postgresql://localhost/<database>"