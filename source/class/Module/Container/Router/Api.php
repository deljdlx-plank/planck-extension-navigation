<?php


namespace Planck\Extension\Navigation\Module\Container\Router;


use Phi\HTML\CSSFile;
use Phi\HTML\JavascriptFile;
use Planck\Extension\Navigation\Module\Container\View\ContainerEditor;
use Planck\Extension\RichTag\Module\Type\View\Index;
use Planck\Routing\Router;




class Api extends Router
{




    public function registerRoutes()
    {

        $this->post('save', '`/container/api/save`', function() {

            $data = $this->post();

            $descriptor = json_decode(
               $data['json'], true
            );

            echo json_encode($descriptor);

        })->json();








        return parent::registerRoutes();
    }

}