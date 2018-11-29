<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\RealWorld\Transformers\TagTransformer;

class CategoryController extends ApiController
{
    /**
     * TagController constructor.
     *
     * @param TagTransformer $transformer
     */
    public function __construct(TagTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Get all the tags.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Category::all()->pluck('id');
        
        //print_r($tags);
        //print_r($this->respondWithTransformer($tags));
        return $this->respondWithTransformer($categories);
    }
}
