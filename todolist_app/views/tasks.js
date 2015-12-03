define([ "backbone",
         "underscore",
         "jquery",
         "collections/tasks",
         "models/task",
         "lawnchair"], 
function (Backbone, _, $, TasksCollection, TaskModel, Lawnchair) {
    var TasksView = Backbone.View.extend({
        el: "#todolist_and_edit",
        template: _.template($('#todolist_and_edit_tpl').html()),
        events: {
            "click #btn_add_task": "addTask",
            "click #btn_remove_task": "removeTask",
            "click #btn_edit_task": "editTask",
            "click #btn_save_task": "saveTask"
        },

        initialize: function() {
            this.todolist = new TasksCollection();
            this.listenTo(this.todolist, "update change", this.render);
        },

        render: function() {
            var self = this;

            //this.todolist.forEach(function(model){
            //    console.log(model.cid); // ID auto pour chaque item model
            //});

            this.$el.html(this.template({todos: self.todolist.toJSON()}));
        },

        addTask: function(event) {
            event.preventDefault();
            var self = this;

            var NewTask = new TaskModel({ 
                title: "Nouvelle tâche",
                editing: true
            });

            NewTask.unset('_id');

            NewTask.save(null, {
                error: function(model, response, options){ 
                    console.log('Impossible de créer la tâche ' + response);
                },
                success: function(model, response, options){
                    console.log('Tâche créée ' + response);
                    self.todolist.add(NewTask);
                }
            });
        },

        editTask: function(event) {
            event.preventDefault();
            var id = $(event.target).parent('li').data('id');
            this.todolist.get(id).set({editing: true});
        },

        saveTask: function(event) {
            event.preventDefault();
            var task = $(event.target).parent('li');
            var newTitle = task.children('#title').val();
            var newContent = task.children('#content').val();
            
            var taskmodel = this.todolist.get(task.data('id'));
            taskmodel.set({
                _id: task.data('id'),
                title: newTitle,
                content: newContent,
            });

            taskmodel.save(null, {
                error: function(model, response, options){ 
                    console.log('Impossible de sauvegarder la tâche ' + response);
                },
                success: function(model, response, options){
                    console.log('Tâche sauvegardée ' + response);
                    taskmodel.set({
                        editing: false
                    });
                }
            });
        },

        removeTask: function(event) {
            event.preventDefault();
            var id = $(event.target).parent('li').data('id');
            var taskToDestroy = this.todolist.get(id);

            taskToDestroy.destroy(null, {
                error: function(model, response, options){ 
                    console.log('Impossible de supprimer la tâche ' + response);
                },
                success: function(model, response, options){
                    console.log('Tâche supprimée ' + response);
                    this.todolist.remove(id);
                }
            });
        },
    });

    return TasksView;
});