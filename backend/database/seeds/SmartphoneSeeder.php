<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Devices;
use App\Category;

class DevicesSeeder extends Seeder
{
    /**
     * Total number of smartphones.
     *
     * @var int
     */
    protected $totalCategories = 1;
    protected $totalDevices = 25;

    public function run(\Faker\Generator $faker)
    {
        /* $category = factory(\App\Category::class)->times($this->totalCategories)->create(); */
        $devices = factory(\App\Devices::class)->times($this->totalDevices)->create();

        $devices->random($faker->numberBetween(1, (int) $devices->count() * 0.5))
        ->each(function ($devices) use ($faker, $category) {
            $devices->category()->attach(
                $category->random($faker->numberBetween(1, min($this->totalCategories, $this->totalDevices)))
            );
        });
    }
}
