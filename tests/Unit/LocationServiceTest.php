<?php

namespace Tests\Unit;

use App\Repositories\LocationsRepository;
use App\Services\LocationsService;
use DatabaseSeeder;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use LocationSeeder;
use Mockery;
use Tests\TestCase;

class LocationServiceTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    protected $repository;
    protected $locationSerice;

    public function setUp(): void {
        parent::setUp();
        //create location service
        $this->locationSerice = app(LocationsService::class);
        //seed location data
        app(DatabaseSeeder::class)->call(LocationSeeder::class);
    }

    public function testServiceCanReturnLocations(){
        $locations = $this->locationSerice->getLocations();
        $this->assertCount(37, $locations);
    }
}
