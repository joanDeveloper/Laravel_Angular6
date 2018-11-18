<?php

namespace App\Http\Controllers\Api;
use App\Smartphones;
use App\RealWorld\Transformers\SmartphoneTransformer;

class SmartphoneController extends ApiController
{
    /**
     * TagController constructor.
     *
     * @param TagTransformer $transformer
     */
    public function __construct(SmartphoneTransformer $transformer)
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
        $smartphones = Smartphones::all();
        //$smartphones = Smartphones::all()->pluck('description');
        //print_r($tags);
        //print_r($this->respondWithTransformer($tags));
        //return $smartphones;
        return $this->respondWithTransformer($smartphones);
    }

    public function show(Smartphones $smartphone)
    {
        //$smartphones = Smartphones::where('slug','=', $smartphone)->firstOrFail();
        //$smartphones = Smartphones::all()->pluck('slug');
        //print_r($article);
        //print_r($article['title']);
        //print_r($this->respondWithTransformer($article));
        return $this->respondWithTransformer($smartphone);
    }
}
