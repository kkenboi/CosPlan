const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// enable cors to talk to react
app.use(cors()); 
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'anihideout'
});

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.listen(8081, () => {
    console.log("Listening...");
});