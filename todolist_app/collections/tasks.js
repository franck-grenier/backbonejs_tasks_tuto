define(["backbone",
        "models/task"], 
function (Backbone, TaskModel) {
    var TasksCollection = Backbone.Collection.extend({

        model: TaskModel,
        
        url: 'http://localhost:3000/tasks',

        initialize: function() {
            this.fetch();
        }
    });

    return TasksCollection;
});