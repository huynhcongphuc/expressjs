const express  = require('express');
const newsrouter = express.Router();
const sitecontroller = require('../app/controllers/sitecontroller.js');

newsrouter.post('/loginout/checklogin',sitecontroller.checklogin);
newsrouter.get('/loginout',sitecontroller.loginout);
newsrouter.get('/:search',sitecontroller.search);
newsrouter.get('/',sitecontroller.index);


module.exports = newsrouter;