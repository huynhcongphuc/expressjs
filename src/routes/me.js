const express  = require('express');
const merouter = express.Router();
const mecontroller = require('../app/controllers/mecontroller.js');

merouter.get('/stored/course',mecontroller.storedcourse);


module.exports = merouter;