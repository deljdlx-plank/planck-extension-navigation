<?php

namespace Planck\Extension\Navigation\Module\Container\View;



use Planck\View\Component;

class ContainerEditor extends Component
{

    public function build()
    {
        parent::build();
        $this->dom->html(
            $this->obInclude(__DIR__.'/template.php', $this->getVariables())
        );
        return $this;


    }


}



