const express  = require('express');
const courserouter = express.Router();
const coursecontroller = require('../app/controllers/coursecontroller.js');

courserouter.get('/create',coursecontroller.create);
courserouter.post('/store',coursecontroller.store);
courserouter.get('/:id/edit',coursecontroller.edit);
courserouter.post('/update/:id',coursecontroller.update);
courserouter.get('/:slug',coursecontroller.show);


module.exports = courserouter;