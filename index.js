const express  = require('express');
const app = express();
const port = 5000;
app.get('/test', (req, res) =>{
    return res.send("hello World");
});

app.listen(port,() => {
    console.log(`listening on port: ${port}`);
});
