const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Todo = new schema({
    todo_desc:{
        type : String
    },
    todo_must:{
        type : String
    },
    todo_prior:{
        type : String
    },
    todo_done:{
        type : Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);