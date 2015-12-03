var express = require('express');
var router = express.Router();
var taskmodel = require('../db/tasks.js');

/* GET tasks list */
router.get('/', function(req, res, next) {
    taskmodel.find(null, null, null, function(err, docs){
        console.log(docs);
        if (err) return new Error(err);
        res.json(docs);
    });
});

/* POST a new task */
router.post('/', function(req, res, next) {
    var NewTask = new taskmodel({
        title: req.body.title,
        content: req.body.content
    });

    NewTask.save(function (err) {
        if (err) return new Error(err);
        res.json(NewTask);
    });
});

/* PUT (update) an existing task */
router.put('/:task_id', function(req, res, next) {
    taskmodel.findOneAndUpdate( {_id: req.body._id}, 
                                { 
                                    title: req.body.title,
                                    content: req.body.content 
                                }, 
                                null, 
                                function(err){
                                    if (err) return new Error(err);
                                    res.status(200).send({});
                                });
});

/* DELETE an existing task */
router.delete('/:task_id', function(req, res, next) {
    console.log(req.params.task_id);
    taskmodel.findOneAndRemove( {_id: req.params.task_id}, 
                                null,
                                function (err) {
                                    if (err) return new Error(err);
                                    res.status(200).send({});
                                });
});

module.exports = router;
