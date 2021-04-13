<?php

namespace App\Http\Controllers;

use App\Http\Resources\LocationsResource;
use App\Services\LocationsService;

class LocationsControler extends BaseController
{   
    private $locationsService;

    /**
     * Instantiates the class
     *
     * @param LocationsService $service
     */
    public function __construct(LocationsService $service)
    {
        $this->locationsService = $service;
    }
    
    /**
     * Get list of locations
     *
     * @return void
     */
    public function index(){

        $locations = $this->locationsService->getLocations();

        return LocationsResource::collection($locations);
    }
}
