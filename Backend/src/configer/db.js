const mysql = require('mysql2');


const connectDB = mysql.createConnection({
    host: process.env.db_Host,
    password: process.env.db_Password,
    port: process.env.Port,
    database: process.env.db_Database ,
})

module.exports = connectDB;