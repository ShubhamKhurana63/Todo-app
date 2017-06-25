var { MongoClient, ObjectID } = require('mongodb');


console.log(ObjectID);

var obj = new ObjectID();
console.log(obj);



// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

//     if (err) {
//         console.log("the error while connecting DB");
//     }
//     // console.log('====mongdb is connected now====');
//     //     db.collection('Todos').insertOne({
//     //         "text": "something to do",
//     //         "isCompleted": false
//     //     }, (err, result) => {
//     //         if (err) {
//     //             console.log("the insertion of the data failed");
//     //         }
//     //         console.log(JSON.stringify(result.ops, undefined, 2));
//     //     })
//         db.close();
//     })



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        console.log("the error while connecting DB");

    }
    db.collection('Users').insertOne({

        "name": "shubham",
        "age": 25,
        "location": "Gurugram"
    }, (err, res) => {
        if (err) {
            console.log('the error is there while inserting the data');
        }
        console.log("==============="+res.ops[0]._id.getTimestamp());
        //console.log(JSON.stringify(res.ops._id, undefined, 2));

    });

})









