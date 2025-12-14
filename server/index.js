require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// express application instance
const app = express();

// enable cors to talk to react
app.use(cors()); 
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// here is where we are doing our GET and POST route definitions
// -> most likely we can move this to another page soon, shouldn't be here
app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening...");
});