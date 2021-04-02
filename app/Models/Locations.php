<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Locations extends Model
{
    public function listings(){
        return $this->hasMany(Listings::class, 'location_code', 'code');
    }
}
