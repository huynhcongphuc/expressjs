const express  = require('express');
const merouter = express.Router();
const mecontroller = require('../app/controllers/mecontroller.js');

merouter.get('/stored/course',mecontroller.storedcourse);
merouter.get('/trash/course',mecontroller.storedtrash);

module.exports = merouter;