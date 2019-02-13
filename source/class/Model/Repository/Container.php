<?php

namespace Planck\Extension\Navigation\Model\Repository;




use Planck\Exception;
use Planck\Helper\StringUtil;
use Planck\Model\Entity;
use Planck\Model\Repository;


use \Planck\Extension\RichTag\Model\Entity\Association as AssociationEntity;

class Container extends Repository
{


    protected static $tableName = 'navigation_container';




    public function store(\Phi\Model\Entity $container, $dryRun = false)
    {

        if(!$container->getValue('qname')) {
            $container->setValue('qname', StringUtil::slugify($container->getValue('name')));
        }
        return parent::store($container, $dryRun);
    }


}
