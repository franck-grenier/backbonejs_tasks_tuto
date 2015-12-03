var TasksDB = {};
var mongoose = require('mongoose'),

    db = mongoose.connect("mongodb://localhost/tasks" , function(err) {
        console.log('MongoDB error ? ' + err);
    });

// MongoDB schema for our tasks
var TaskSchema = new mongoose.Schema({
    title: String,
    content: String
});

var TaskModel = mongoose.model("task", TaskSchema);

module.exports = TaskModel;