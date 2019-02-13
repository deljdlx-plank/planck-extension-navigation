<?php


namespace Planck\Extension\Navigation\Module\Container\Router;


use Phi\HTML\CSSFile;
use Phi\HTML\JavascriptFile;
use Planck\Extension\Navigation\Module\Container\View\ContainerEditor;
use Planck\Extension\RichTag\Module\Type\View\Index;
use Planck\Router;




class Api extends Router
{




    public function registerRoutes()
    {


        $this->get('get-routes', '`/navigation/get-routes`', function() {



        })->json()
        ;







        return parent::registerRoutes();
    }

}