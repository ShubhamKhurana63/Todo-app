var mongoose=require('mongoose');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        default:false
    }, completeAt: {
        type: Number,     
        default:0
    }
})


module.exports={Todo};