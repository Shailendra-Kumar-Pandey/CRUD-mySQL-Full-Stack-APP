const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const studentRoute = require('./route/studentRoute');

const app = express()

//Middlewares
app.use(cors());
app.use(morgan('dev')); 
app.use(express.json());

//Routes

app.use('/api/student', studentRoute);


module.exports = app;