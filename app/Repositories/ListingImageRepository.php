<?php
namespace App\Repositories;


use App\Models\ListingImages;

class ListingImageRepository extends BaseRepository{

    public function __construct(ListingImages $model)
    {
        $this->model = $model;
    }
}