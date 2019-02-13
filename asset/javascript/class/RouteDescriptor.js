Planck.Extension.Navigation.RouteDescriptor = function()
{
    this.label = '';
    this.description = '';

};


Planck.Extension.Navigation.RouteDescriptor.prototype.loadFromDescriptor = function(descriptor)
{
   this.label = descriptor.label;
   this.description = descriptor.description;

   return this;
};


Planck.Extension.Navigation.RouteDescriptor.prototype.getLabel = function()
{
    return this.label;
};



