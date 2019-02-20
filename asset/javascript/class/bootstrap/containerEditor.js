$(function() {
    if(document.location.toString().match(/navigation\/container\/list/)) {

        var controller = new Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor();


        var routeSelector = new Planck.Extension.Navigation.View.Component.RouteSelector();
        routeSelector.loadRoutes();


        var entitySelector = new Planck.Extension.FormComponent.View.Component.EntitySelector('.entity-selector-placeholder');
        entitySelector.render();



    }
});