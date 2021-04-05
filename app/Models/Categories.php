<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $fillable = [
        'id',
        'name',
        'icon',
        'slug'
    ]; 

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function listings(){
        return $this->hasMany(Listings::class, 'category_id', 'id');
    }
}
