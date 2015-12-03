define([
    'jquery',
    'underscore',
    'backbone',
    'views/tasks'
], 
function($, _, Backbone, TasksView){
  
    var Router = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start();
        },
        
        routes: {
            '': '_default',
        },
        
        _default: function() {
            new TasksView();
        },

    });

    return Router;
});