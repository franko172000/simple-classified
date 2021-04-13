<?php
namespace App\Services;

use App\Repositories\LocationsRepository;

class LocationsService {
    /**
     * Repository variale
     *
     * @var LocationsRepository
     */
    private $repository;
    
    /**
     * Constructor method to instantiate the class
     *
     * @param LocationsRepository $repository
     */
    public function __construct(LocationsRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Get locations
     *
     * @return collections
     */
    public function getLocations(){
        return $this->repository->all();
    }
}