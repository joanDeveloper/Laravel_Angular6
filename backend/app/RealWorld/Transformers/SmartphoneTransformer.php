<?php

namespace App\RealWorld\Transformers;

class SmartphoneTransformer extends Transformer
{
    protected $resourceName = 'smartphone';

    public function transform($data)
    {
        //return $data['name'];
        //return $data = json_decode($data['name'], true);
        //return $data;
        return [
            'slug'              => $data['slug'],
            'name'              => $data['name'],
            'description'             => $data['description'],
            'battery'       => $data['battery'],
            'inches'       => $data['inches'],
            'system'       => $data['system'],
            'model'       => $data['model'],
            'brand'       => $data['brand'],
            'camera'       => $data['camera'],
            'pixels'       => $data['pixels']
            
        ];
    }
}