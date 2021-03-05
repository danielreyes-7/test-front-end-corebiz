const express = require('express');
const app = express();
var createError = require("http-errors");


app.use(express.static('public'));

// Port Listener
app.listen(3000, () => {
    console.log('Server Working Out')
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});