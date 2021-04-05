<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Listings extends Model
{

    protected $fillable = [
        'id',
        'user_id',
        'category_id',
        'location_code',
        'title',
        'description',
        'excerpt',
        'price',
        'currency',
        'slug',
        'status',
        'last_date_online',
        'last_date_offline',
        'created_at',
    ];

    public static $rules = [
        'title'       => 'required|min:2',
        'description' => 'required|min:10',
        'excerpt'     => 'required|min:10|max:255',
        'price'       => 'required',
        'images'      => 'required|array|min:1',
        'currency'    => 'required',
        'category'    => 'required',
        'location'    => 'required'
    ];

    public static $messages = [
        'title.required' => 'Title is required',
        'description.required' => 'Description is required',
        'excerpt.required'     => 'Excerpt is required',
        'excerpt.min'     => 'Excerpt is too short',
        'excerpt.max'     => 'Excerpt is too long. Maximum character lenght is 255',
        'images.required'     => 'Listing images are required',
        'images.array'     => 'Listing images must be array',
        'images.min'     => 'Listing images must have atleast one image',
        'currency.required'    => 'Currency is required',
        'category.required'    => 'Category is required',
        'location.required'    => 'location is required'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(Categories::class, 'category_id', 'id');
    }

    public function location(){
        return $this->belongsTo(Locations::class, 'location_code', 'code');
    }

    public function images(){
        return $this->hasMany(ListingImages::class, 'listing_id', 'id');
    }
}
