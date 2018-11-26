<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Devices;

class DevicesSeeder extends Seeder
{
    /**
     * Total number of smartphones.
     *
     * @var int
     */
    protected $totalDevices = 25;

    public function run(\Faker\Generator $faker)
    {
        $smartphones = factory(\App\Devices::class)->times($this->totalDevices)->create();
        
    }
}
