<?php
namespace App\Repositories;

use App\Models\Locations;

class LocationsRepository extends BaseRepository{

    public function __construct(Locations $model)
    {
        $this->model = $model;
    }

    public function all(){
        return $this->model->all();
    }
}