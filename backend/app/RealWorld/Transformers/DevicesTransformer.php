<?php

namespace App\RealWorld\Transformers;

class DevicesTransformer extends Transformer
{
    protected $resourceName = 'devices';

    public function transform($data)
    {
        //return $data['name'];
        //return $data = json_decode($data['name'], true);
        //return $data;
        return [
            'slug'        => $data['slug'],
            'model'       => $data['model'],
            'description' => $data['description'],
            'price'       => $data['price'],
            'battery'     => $data['battery'],
            'brand'       => $data['brand'],
            'camera'      => $data['camera']
            //'tagList'           => $data['tagList'],
        ];
    }
}