Planck.Extension.Navigation.View.Component.RouteSelector = function()
{

    this.routes = {};


};



Planck.Extension.Navigation.View.Component.RouteSelector.prototype.loadRoutes = function()
{
    var url = '?/@extension/planck-extension-tool/route/api[get-routes]';

    var data = {
    };
    Planck.ajax({
        url: url,
        method: 'get',
        data: data,
        success: function(response) {


            for(var routeName in response) {
                if(response[routeName]) {
                    var descriptor = new Planck.Extension.Navigation.RouteDescriptor();
                    descriptor.loadFromDescriptor(
                        response[routeName]
                    );
                    this.routes[routeName] = descriptor;
                }
            }

            this.render('.plk-route-selector');


        }.bind(this)
    });


};

Planck.Extension.Navigation.View.Component.RouteSelector.prototype.render = function(container)
{
   this.$container = $(container);

    this.$container.html(this.getElement());

};


Planck.Extension.Navigation.View.Component.RouteSelector.prototype.getElement = function()
{
    this.$element = $('<select></select>');
    for(var routeName in this.routes) {
        var descriptor = this.routes[routeName];
        var $option = $('<option value="'+routeName+'">'+descriptor.getLabel()+'</option>');
        this.$element.append($option);
    }

    return this.$element;
};







