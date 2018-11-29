<?php

namespace App\RealWorld\Filters;

use App\Tag;
use App\Devices;
use App\User;

class DeviceFilter extends Filter
{
    
    /**
     * Filter by tag name.
     * Get all the articles tagged by the given tag name.
     *
     * @param $name
     * @return \Illuminate\Database\Eloquent\Builder
     */

    protected function category($name)
    {
        //print_r($name);
        //$device = Devices::where("category_id","=",$name)->first();
        $device = Devices::whereCategoryId($name)->first();
        //$articleIds = $device ? $device->categories()->pluck('category_id')->toArray() : [];
        return $this->builder->whereIn('category_id', $device);
        //$articleIds = $device ? $device->pluck('slug')->toArray() : [];
       /* echo "<br>";
        echo "<br>";
        echo "<br>";
        echo "<br>";
        //return $this->builder->whereIn('id', $device);
        echo json_encode($device);*/
        
        /*$tag = Tag::whereName($name)->first();

        $articleIds = $tag ? $tag->articles()->pluck('article_id')->toArray() : [];

        return $this->builder->whereIn('id', $articleIds);*/
    }
}