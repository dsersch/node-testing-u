const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: "page not found",
        name: "Todo App v1.0"
    })
})

app.get('/users', (req, res) => {
    res.send([
        {name: 'dave', age: 33},
        {name: 'chris', age: 31},
        {name: 'zack', age: 27}
    ])
})

app.listen(3000, (err) => {
    console.log(err || 'server running on port 3000👍')
});

module.exports.app = app;