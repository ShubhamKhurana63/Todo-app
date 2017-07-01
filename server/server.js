//library imports
var express = require('express');
var bodyParser = require('body-parser');


//local imports
var { mongoose } = require('./db/mongoose.js')
var { Todo } = require('./models/todo.js');
var { user } = require('./models/user.js');
var { ObjectID } = require('mongodb');


const port=process.env.PORT || 3000;


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
        res.send(doc);
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


app.get('/todos/:id', (req, res) => {
  //  res.send(req.params.id);
    var id = req.params.id;
    //valudarte using the ObjectID.isValid
    //send 404,send back empty send

    //find by id
    //success
    //if todo send it back
    if (!ObjectID.isValid(id)) {
     return  res.status(400).send();
    }
    Todo.findById(id).then((response) => {
        if (!response) {
            res.status(404).send();
        }
        res.status(200).send({response});
    }, (error) => {
            res.status(400).send();
        })
})







module.exports = { app };
app.listen(port);