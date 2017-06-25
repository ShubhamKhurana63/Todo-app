var { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    // db.collection('Todos').find({"_id":new ObjectID('594fda324afb2700746f111c'),"isCompleted":false}).toArray().then((doc) => {
    //     console.log(JSON.stringify(doc, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch the data from the DB');

    // })


    //  db.collection('Todos').count().then((count) => {
    //         //console.log(JSON.stringify(doc, undefined, 2));    
    // console.log(`Todos count+${count}`);
    // }, (err) => {
    //         console.log('unable to fetch the data from the DB');
    //     })
    // })

    db.collection('Users').find({"name":"hemang"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch the data from the DB');
    })
});






