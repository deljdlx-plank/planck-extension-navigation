$(function() {
    if(document.location.toString().match(/navigation\/container\/list/)) {


        var routeSelector = new Planck.Extension.Navigation.View.Component.RouteSelector();
        routeSelector.loadRoutes();



    }
});