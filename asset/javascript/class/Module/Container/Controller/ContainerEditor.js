Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor = function()
{

    this.$element = $('div[data-component-name=Planck\\.Extension\\.Navigation\\.Module\\.Container\\.View\\.ContainerEditor]');



    this.$jsonEditorContainer = this.$element.find('.json-editor-container');

    this.$jsonEditorContainer.css('height', 800);

    this.containerEntity = null;
    this.containerDescriptor = null;

    this.jsonEditor = null;



    this.$jsonSaveButton = $('<button type="button">Enregistrer</button>');
    this.$element.prepend(this.$jsonSaveButton);
    this.$jsonSaveButton.click(function() {
        this.saveJSON();
    }.bind(this));


    this.initialize();
};


Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor.prototype.saveJSON = function()
{

    console.log(this.containerEntity);




    var json = JSON.stringify(this.jsonEditor.get());

    console.log(this.containerEntity);

    this.containerEntity.setValue('descriptor', json);
    this.containerEntity.store();

    /*
    var url = '?/@extension/planck-extension-navigation/container/api[save]';
    var data = {
        json: json
    };
    Planck.ajax({
        url: url,
        method: 'post',
        data: data,
        success: function(response) {

        }.bind(this)
    });
    */



    console.log();
};




Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor.prototype.initialize = function()
{
    Planck.Controller.prototype.initialize.call(this);
    this.containerEntity = this.getDataLayer().getEntry('navigationContainer');

    console.log(this.containerEntity);

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
        mode: 'tree',
        modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
        /*
        autocomplete: {
            getOptions: function () {
                return ['apple', 'cranberry', 'raspberry', 'pie', 'mango', 'mandarine', 'melon', 'appleton'];
            }
        }
        */
    };
    this.jsonEditor = new JSONEditor(container, options, this.containerDescriptor);


};





Planck.inherit(
    Planck.Extension.Navigation.Module.Container.Controller.ContainerEditor,
    Planck.Controller
);
