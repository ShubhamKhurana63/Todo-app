var { mongoose } = require('./../server/db/mongoose');

var { Todo } = require('./../server/models/todo.js');


var { user } = require('./../server/models/user.js');

var id = "595758a1fa052c98081fbc5c";


var userId = "5950e36d6d879eb80ba555ed";



console.log(id);

// Todo.find({
//     //"isCompleted":false
//     _id: id
// }).then((todos) => {
//     console.log('todos0====================', todos);
// });



// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('todos1================', todos);
// });


// Todo.findById(id).then((todos) => {

//     if (!todos) {
//         console.log("id not found")
//     }

//     console.log('todos2===================', todos);
// }).catch((err) => {

//     console.log(err);

// })



user.findById(userId).then((todos) => {

    if (!todos) {
        console.log("id not found")
    }
    console.log('todos2===================', todos);
}).catch((err) => {

    console.log(err);

})























// Todo.findOne({
// _id:id
// }).then((res)=>
// {
// console.log('todos',res);
// })


// Todo.findById(id).then((res)=>
// {
// console.log('todos',res);
// })