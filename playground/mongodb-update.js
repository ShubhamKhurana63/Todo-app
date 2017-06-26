var { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {


    // db.collection('Todos').findOneAndUpdate({ "_id": new ObjectID("594fdb23e87c1c2d6831bbac") },
    // { $set:{ "isCompleted": true }},{"returnOriginal":true})


  db.collection('Users').findOneAndUpdate({ "name":"simran"},
    { $set:{ "name": "sid" },$inc:{age:1}},{"returnOriginal":true})

});






