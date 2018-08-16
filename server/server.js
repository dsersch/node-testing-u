const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(3000, (err) => {
    console.log(err || "server running on port 3000👍")
});