const express  = require('express');
const courserouter = express.Router();
const coursecontroller = require('../app/controllers/coursecontroller.js');
const authMiddleWare = require('../app/middlewares/authMiddleWare.js');

courserouter.get('/create',authMiddleWare.requireAuth, coursecontroller.create);
courserouter.post('/store',authMiddleWare.requireAuth, coursecontroller.store);
courserouter.post('/handleform',authMiddleWare.requireAuth, coursecontroller.handleform);
courserouter.post('/handletrash',authMiddleWare.requireAuth, coursecontroller.handletrash);
courserouter.get('/:id/edit',authMiddleWare.requireAuth, coursecontroller.edit);
courserouter.post('/update/:id',authMiddleWare.requireAuth, coursecontroller.update);
courserouter.post('/delete/:id',authMiddleWare.requireAuth, coursecontroller.delete);
courserouter.post('/deleteforce/:id',authMiddleWare.requireAuth, coursecontroller.deleteforce);
courserouter.post('/restore/:id',authMiddleWare.requireAuth, coursecontroller.restore);
courserouter.get('/:slug',coursecontroller.show);


module.exports = courserouter;