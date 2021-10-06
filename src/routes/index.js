const newsrouter = require('./news.js');
const siterouter = require('./site.js');
const courserouter = require('./course.js');
const merouter = require('./me.js');
const authMiddleWare = require('../app/middlewares/authMiddleWare.js');


function route(app) {

    app.use('/news', newsrouter);

    app.use('/course', authMiddleWare.requireAuth, courserouter);
    app.use('/me',authMiddleWare.requireAuth, merouter);

    app.post('/news', (req, res) => {
        console.log(req.body.gender);
        res.send("");
    });

    app.use('/', siterouter);




}

module.exports = route;