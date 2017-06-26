var { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    //delete many
    //     db.collection('Todos').deleteMany({'text':'Eat lunch'}).then((result) => {
    //         console.log(result);
    //     },(error)=>
    //     {

    // console.log('error in our logic');

    //     })






    //delete one


    //  db.collection('Todos').deleteOne({'text':'Ear lunch'}).then((result) => {
    //         console.log(result);
    //     },(error)=>
    //     {

    // console.log('error in our logic');

    //     })


    //fin one and delete

    //  db.collection('Todos').findOneAndDelete({'text':'something to be done'}).then((result) => {
    //         console.log(result);
    //     },(error)=>
    //     {

    // console.log('error in our logic');

    //     })

    //delete many from users


    //  db.collection('Users').deleteMany({'name':'hemang'}).then((result) => {
    //         console.log(result);
    //     },(error)=>
    //     {
    // console.log('error in our logic');
    //     })



    db.collection('Users').findOneAndDelete({ '_id': new ObjectID('595005d72d905414485dd4d0') }).then((result) => {
        console.log(result);
    }, (error) => {
            console.log('error in our logic');
        })










});






