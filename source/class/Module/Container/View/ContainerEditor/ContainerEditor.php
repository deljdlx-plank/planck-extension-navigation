<?php

namespace Planck\Extension\Navigation\Module\Container\View;




use Phi\HTML\Element\Div;
use Planck\Extension\FrontVendor\Package\JsonEditor;
use Planck\Extension\Navigation\Model\Entity\Container;
use Planck\Extension\ViewComponent\View\Component\JavascriptComponent;


class ContainerEditor extends JavascriptComponent
{


    /**
     * @var Container
     */
    private $navigationContainer;

    private $contentDom;

    public function __construct($navigationContainerId = null)
    {
        parent::__construct();

        $this->addFrontPackage(
            new JsonEditor()
        );

        if($navigationContainerId) {
            $this->navigationContainer = $this->getApplication()->getModelEntity(Container::class);
            $this->navigationContainer->loadById($navigationContainerId);
            $this->setVariable('navigationContainer', $this->navigationContainer);
        }


    }


    public function getContent()
    {

        $this->contentDom = new Div();
        $this->contentDom->html(
            $this->obInclude(__DIR__.'/template.php', $this->getVariables()), true
        );


        if($this->navigationContainer) {
            $this->contentDom->find('#descriptor')->html(
                $this->navigationContainer->getValue('descriptor')
            );
        }


        return $this->contentDom->render();
    }



}



