<?php
namespace App\Services;

use App\Repositories\LocationsRepository;

class LocationsService {
    /**
     * Undocumented variable
     *
     * @var [type]
     */
    private $repository;
    
    public function __construct(LocationsRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getLocations(){
        return $this->repository->all();
    }
}