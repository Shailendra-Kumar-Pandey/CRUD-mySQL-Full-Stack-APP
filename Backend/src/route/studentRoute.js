const express = require('express');
const { getAllStudent } = require('../controller/studentController');

const route = express.Router()


// get api

route.get('/getAllStudent', getAllStudent)


module.exports = route;