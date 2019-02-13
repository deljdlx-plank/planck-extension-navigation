Planck.Extension.Navigation.View.Component.RouteSelector = function()
{

};



Planck.Extension.Navigation.View.Component.RouteSelector.prototype.loadRoutes = function()
{
    var url = '?/extension/planck-navigation/container[get-routes]';
    var data = {
    };
    Planck.ajax({
        url: url,
        method: 'get',
        data: data,
        success: function(response) {
            console.log(response);
        }.bind(this)
    });


};




