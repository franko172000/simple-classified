<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{

    public function listings(){
        return $this->hasMany(Listings::class);
    }
}
