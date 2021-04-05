<?php

namespace App\Http\Controllers;

use App\Http\Resources\LocationsResource;
use App\Services\LocationsService;

class LocationsControler extends BaseController
{   
    private $locationsService;

    public function __construct(LocationsService $service)
    {
        $this->locationsService = $service;
    }
    
    public function index(){

        $locations = $this->locationsService->getLocations();

        return LocationsResource::collection($locations);
    }
}
