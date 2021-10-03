const express  = require('express');
const merouter = express.Router();
const mecontroller = require('../app/controllers/mecontroller.js');
const newscontroller = require('../app/controllers/newscontroller.js');

merouter.get('/stored/news',newscontroller.index);

merouter.get('/stored/course',mecontroller.storedcourse);
merouter.get('/trash/course',mecontroller.storedtrash);

module.exports = merouter;