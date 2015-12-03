requirejs.config({
    baseUrl: '',
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }, 
    paths: {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "underscore": "bower_components/underscore/underscore-min",
        "backbone": "bower_components/backbone/backbone-min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "text": "bower_components/text",
        "lawnchair": "bower_components/lawnchair/src/Lawnchair",
        "marionette": "bower_components/marionette/backbone.marionette.min"
    }
});

require(["backbone", 
         "js/router"], 
    function (Backbone, Router) {
        new Router();

        /* Intercepte et réimplémente le fetch des collections et des modèles */
        /*
        Backbone.sync = function(method, model, options) {
            switch(method){
                case 'read':
                    console.log('read ' + model);
                    options.success();
                    return;
                    break;
                case 'create':
                    console.log('create ' + model);
                    options.success();
                    return;
                    break;
                case 'update':
                    console.log('update ' + model);
                    options.success();
                    return;
                    break;
                case 'delete':
                    console.log('delete ' + model);
                    options.success();
                    return;
                    break;
            }
        }*/
    }
);