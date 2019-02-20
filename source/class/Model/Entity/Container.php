<?php

namespace Planck\Extension\Navigation\Model\Entity;




use Planck\Model\Entity;
use Planck\Model\Traits\HasProperties;
use Planck\Model\Traits\Timestampable;

class Container extends Entity
{
    use HasProperties;
    use Timestampable;


    public function getDescriptor()
    {
        return json_decode($this->getValue('descriptor'), true);
    }


    /**
     * @return \Planck\Navigation\Container
     */
    public function getContainer()
    {

        $navigationContainer = new \Planck\Navigation\Container();
        $navigationContainer->loadByDescriptor($this->getDescriptor());
        return $navigationContainer;
    }




}
