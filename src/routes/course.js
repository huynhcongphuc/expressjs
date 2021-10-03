const express  = require('express');
const courserouter = express.Router();
const coursecontroller = require('../app/controllers/coursecontroller.js');

courserouter.get('/create',coursecontroller.create);
courserouter.post('/store',coursecontroller.store);
courserouter.post('/handleform',coursecontroller.handleform);
courserouter.post('/handletrash',coursecontroller.handletrash);
courserouter.get('/:id/edit',coursecontroller.edit);
courserouter.post('/update/:id',coursecontroller.update);
courserouter.post('/delete/:id',coursecontroller.delete);
courserouter.post('/deleteforce/:id',coursecontroller.deleteforce);
courserouter.post('/restore/:id',coursecontroller.restore);
courserouter.get('/:slug',coursecontroller.show);


module.exports = courserouter;