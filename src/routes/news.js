const express  = require('express');
const newsrouter = express.Router();
const newscontroller = require('../app/controllers/newscontroller.js');

newsrouter.get('/:slug',newscontroller.show);
newsrouter.get('/',newscontroller.index);


module.exports = newsrouter;