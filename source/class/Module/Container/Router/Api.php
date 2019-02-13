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

            $routes = $this->getApplication()->getRoutes();


            echo '<pre id="' . __FILE__ . '-' . __LINE__ . '" style="border: solid 1px rgb(255,0,0); background-color:rgb(255,255,255)">';
            echo '<div style="background-color:rgba(100,100,100,1); color: rgba(255,255,255,1)">' . __FILE__ . '@' . __LINE__ . '</div>';
            print_r(array_keys($routes));
            echo '</pre>';

            die('EXIT '.__FILE__.'@'.__LINE__);




        })->json()
        ;







        return parent::registerRoutes();
    }

}