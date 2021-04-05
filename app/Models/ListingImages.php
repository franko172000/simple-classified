<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ListingImages extends Model
{
    protected $fillable = [
        'listing_id',
        'photo'
    ];


    protected $table = "listing_images";

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

    public function listing(){
        return $this->belongsTo(Listings::class, 'listing_id', 'id');
    }
}
