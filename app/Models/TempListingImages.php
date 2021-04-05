<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempListingImages extends Model
{
    protected $fillable = [
        'photo'
    ];
    
    public static $storagePath = '/storage/img/ad-images/';

    /**
     * This function gets the company logo
     * 
     * @param bool $absolute_path
     * @return String
     */
    public function getPhoto($absolute_path = FALSE)
    {
        if ($absolute_path)
            return asset(static::$storagePath.$this->photo);

        return static::$storagePath.$this->photo;
    }
}
