const express  = require('express');
const morgan = require('morgan');
const expresshandle = require('express-handlebars');
const app = express();
const port = 5000;

//http logger
//app.use(morgan('combined'));

//Template Engines
app.engine('handlebars', expresshandle());
app.set('view engine', 'handlebars')
//dinh dang thu muc views engine
app.set('views','./src/resources/views/');

app.use(express.static('./src/public'));
//su dung midleware su ly du lieu post form
app.use(express.urlencoded());
app.use(express.json());
//render page with Template Engines
app.get('/', (req, res) =>{
    res.render('home');
    //return res.send("hello");
});

app.get('/news', (req, res) =>{
    res.render('news');
    //return res.send("hello");
});

app.post('/news', (req, res) =>{
    console.log(req.body.gender);
    res.send("");
    //return res.send("hello");
});

app.get('/search', (req, res) =>{
    res.render('search');
    //return res.send("hello");
});

app.listen(port,() => {
    console.log(`listening on port: ${port}`);
});
