<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Devices;

class DevicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    protected $totalDevices = 25;
    public function run(\Faker\Generator $faker)
    {
        //
        $devices = factory(\App\Devices::class)->times($this->totalDevices)->create();
    }
}
