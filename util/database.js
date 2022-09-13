const mysql = require('mysql2')
const process = require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

module.exports = pool.promise()