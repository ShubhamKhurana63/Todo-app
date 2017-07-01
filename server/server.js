//library imports
var express = require('express');
var bodyParser = require('body-parser');


//local imports
var { mongoose } = require('./db/mongoose.js')
var { Todo } = require('./models/todo.js');
var { user } = require('./models/user.js');


var app = express();
app.use(bodyParser.json());


app.post('/todos', (req, res) => {

    console.log(req.body);

    var todo = new Todo({
        text: req.body.text,
        isCompleted: req.body.isCompleted,
        completeAt: req.body.completeAt
    })

    todo.save().then((doc) => {
        res.send({doc});
    }, (err) => {
        res.status(400).send(err);
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
})










module.exports = { app };
app.listen(3000);