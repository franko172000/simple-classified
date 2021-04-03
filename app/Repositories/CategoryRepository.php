<?php
namespace App\Repositories;

use App\Models\Categories;

class CategoryRepository extends BaseRepository{

    public function __construct(Categories $model)
    {
        $this->model = $model;
    }
}