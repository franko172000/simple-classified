<?php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Str;

class UserRepository extends BaseRepository{

    public function __construct(User $model)
    {
        $this->model = $model;
    }
}