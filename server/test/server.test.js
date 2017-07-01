var expect = require('expect');

var request = require('supertest');

var { app } = require('./../server');
var { Todo } = require('./../models/todo');

var todos = [
    {
        text: "First test todo"
    },
    {
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