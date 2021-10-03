const newsrouter = require('./news.js');
const siterouter = require('./site.js');
const courserouter = require('./course.js');
const merouter = require('./me.js');


function route(app) {

    app.use('/news', newsrouter);

    app.use('/course', courserouter);
    app.use('/me', merouter);

    app.post('/news', (req, res) => {
        console.log(req.body.gender);
        res.send("");
    });

    app.use('/', siterouter);




}

module.exports = route;