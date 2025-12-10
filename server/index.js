const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// enable cors to talk to react
app.use(cors()); 
app.use(express.json());

const db = 