const express = require('express');
const { getAllStudent, createStudent } = require('../controller/studentController');

const route = express.Router()


// Method GET - get All Students

route.get('/getAllStudent', getAllStudent)

// Method POST - Create new Student

route.post('/createNewStudent', createStudent)


module.exports = route;