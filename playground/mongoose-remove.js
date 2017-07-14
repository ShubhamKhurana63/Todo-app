var { mongoose } = require('./../server/db/mongoose');

var { Todo } = require('./../server/models/todo.js');

var { user } = require('./../server/models/user.js');


// Todo.remove({}).then((result) => {
//     console.log(result);
// })



Todo.findByIdAndRemove('5969137dd3e38c3b93acc38d').then((doc)=>
{
console.log(doc);
})