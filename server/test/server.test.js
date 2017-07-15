var expect = require('expect');

var request = require('supertest');

var { app } = require('./../server');
var { Todo } = require('./../models/todo');

var { ObjectID } = require('mongodb');



var todos = [
    {
        _id: new ObjectID(),
        text: "First test todo"
    },
    {
        _id: new ObjectID(),
        text: "Second test todo"
    }
];



beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => {
        done();
    });
})

describe('POST /todos', () => {
    it('the api for testing the post request', (done) => {
        var text = "Test todo text";
        request(app).post('/todos').send({ text }).expect(200).expect((res) => {

            console.log("inside error box 2");
            console.log(res.body);
            console.log(res.body.text);
            console.log(text);
            console.log("outside error box 2");
            expect(res.body.text).toBe(text)
        }).end((err, res) => {
            if (err) {
                console.log("inside error box 1");
                return done(err);
            }
            Todo.find({ text }).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((ex) => {
                done(ex)
            })
        });
    })

    it('checking the api in case of invalid json', (done) => {
        request(app).post('/todos').send({}).expect(400).end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((ex) => {
                done(ex);
            })


        })
    })
})


describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app).get('/todos').expect(200).expect((res) => {
            console.log("entering the third test case");
            console.log(res.body);

            expect(res.body.length).toBe(2);
        }).end(done);
    })
})


describe('GET /todos/:id', () => {
    it('should get a todo based on id', (done) => {
        request(app).get(`/todos/${todos[0]._id.toHexString}`).expect(200).expect((res) => {
            expect(res.body.response.text).toBe(todos[0].text);
        }).end(done());
    })


    it('should check the invalid id', (done) => {
        request(app).get(`/todos/123`).expect(400).end(() => {
            done();
        })
    })
})

// describe('DELETE /todos/:id', () => {
//     it('should delete the data for an id', (done) => {
//        // var id = ();
//         //console.log('tracking===================id');
//       //  console.log(id);
//         request(app).delete(`/todos/${todos[1]._id.toHexString()}`).expect(200).expect((res) => {
//         console.log("====================track the response=====================");
//         console.log(res);
//             expect(res.body._id).toBe(todos[1]._id.toHexString());
//         }).end((err, res) => {
//             if (err) {
//                 return done(err);
//             }
//         Todo.findById(todos[1]._id.toHexString()).then((todo)=>
//         {
//         expect(todo).toNotExist();
//         done();
//         }
//         ).catch((err)=>
//         {
//             done(err);
//         })
//     })
// })
//     it('should return 404 for an invalid  id', (done) => {
//         request(app).delete(`todos/123`).expect(404).end(() => {
//             done();
//         });
//     })

// });
