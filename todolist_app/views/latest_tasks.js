define(["backbone",
         "underscore",
         "jquery",
         "views/tasks"], 
function (Backbone, _, $, TasksView) {
    // Nouvelle vue qui hérite de la précédente. Cela fonctionne.
    var LatestTasksView = TasksView.extend({
        el: '#last_todos',
        template: _.template($('#last_todos_tpl').html()),

        render: function() {
            var self = this;

            //todolist.forEach(function(model){
            //    console.log(model.cid); // ID auto pour chaque item model
            //});
    
            var lasttodolist = todolist.clone();
            var result = _.sortBy(lasttodolist.toJSON(), function(todo){ 
                return 1/todo.id.substr(1);
            });
            this.$el.html(this.template({todos: result}));
        },
    });

    return LatestTasksView;
});