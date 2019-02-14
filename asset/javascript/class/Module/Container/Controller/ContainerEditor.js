Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor = function()
{

    this.$element = $('div[data-component-name=Planck\\.Extension\\.Navigation\\.Module\\.Container\\.View\\.ContainerEditor]');


    this.$jsonEditorContainer = this.$element.find('.json-editor-container');


    this.containerEntity = null;
    this.containerDescriptor = null;

    this.jsonEditor = null;


    this.initialize();



};




Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor.prototype.initialize = function()
{
    Planck.Controller.prototype.initialize.call(this);
    this.containerEntity = this.getDataLayer().getEntry('navigationContainer');
    this.containerDescriptor = JSON.parse(
        this.containerEntity.getValue('descriptor')
    );

    console.log(this.containerEntity);
    this.initializeJsonEditor();

};




Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor.prototype.initializeJsonEditor = function()
{
    var container = this.$jsonEditorContainer.get(0);
    var options = {
        autocomplete: {
            getOptions: function () {
                return ['apple', 'cranberry', 'raspberry', 'pie', 'mango', 'mandarine', 'melon', 'appleton'];
            }
        }
    };
    this.jsonEditor = new JSONEditor(container, options, this.containerDescriptor);


};





Planck.inherit(
    Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor,
    Planck.Controller
);
