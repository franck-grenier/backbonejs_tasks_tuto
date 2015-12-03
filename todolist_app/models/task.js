define(["backbone"], 
function (Backbone) {
    var TaskModel = Backbone.Model.extend({

        idAttribute:'_id',

        defaults: {
            _id: "",
            title: "",
            content: "",
            editing: false
        },

        urlRoot: 'http://localhost:3000/tasks',

        initialize: function() {
            //this.set({id: this.cid});
        }
    });

    return TaskModel;
});