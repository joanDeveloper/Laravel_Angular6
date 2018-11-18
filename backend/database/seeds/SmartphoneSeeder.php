<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Smartphones;

class SmartphoneSeeder extends Seeder
{
    /**
     * Total number of smartphones.
     *
     * @var int
     */
    protected $totalSmartphones = 25;

    public function run(\Faker\Generator $faker)
    {
        $smartphones = factory(\App\Smartphones::class)->times($this->totalSmartphones)->create();
        
    }
}
