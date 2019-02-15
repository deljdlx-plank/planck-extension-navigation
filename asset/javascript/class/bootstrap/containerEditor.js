$(function() {
    if(document.location.toString().match(/navigation\/container\/list/)) {


        var controller = new Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor();


        var routeSelector = new Planck.Extension.Navigation.View.Component.RouteSelector();
        routeSelector.loadRoutes();


        var entitySelector = new Planck.Extension.FormComponent.View.Component.EntitySelector('.entity-selector-placeholder');
        entitySelector.render();






        // create the editor
        /*
        var container = document.getElementById('jsoneditor');
        var options = {
            autocomplete: {
                getOptions: function () {
                    return ['apple', 'cranberry', 'raspberry', 'pie', 'mango', 'mandarine', 'melon', 'appleton'];
                }
            }
        };
        */

        //var json = JSON.parse(container.innerHTML);

        /*
        var json = {
            'array': [{'field1':'v1', 'field2':'v2'}, 2, 3],
            'boolean': true,
            'null': null,
            'number': 123,
            'object': {'a': 'b', 'c': 'd'},
            'string': 'Hello World'
        };
         var editor = new JSONEditor(container, options, json);
        */








    }
});