const express = require('express');
const morgan = require('morgan');
const expresshandle = require('express-handlebars');
const app = express();
const port = 5000;

const route = require('./routes/index.js')
//connect db
const db = require('./config/db/index.js')
db.connect();

//http logger
//app.use(morgan('combined'));

//config handle bars
app.engine('handlebars',
    expresshandle({
        helpers: {
            sum: (a) => ++a
        }
    })
);
app.set('view engine', 'handlebars')
//dinh dang thu muc views engine
app.set('views', './src/resources/views/');

app.use(express.static('./src/public'));
//su dung midleware su ly du lieu post form
app.use(express.urlencoded());
app.use(express.json());

//router
route(app);


app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
