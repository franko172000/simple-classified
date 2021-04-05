<?php
namespace App\Repositories;

use App\Models\TempListingImages;

class TempListingImageRepository extends BaseRepository{

    public function __construct(TempListingImages $model)
    {
        $this->model = $model;
    }
}