<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Listings extends Model
{

    protected $fillable = [
        'title',
        'description',
        'excerpt',
        'price',
        'photo',
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
        'excerpt'     => 'required|min:10',
        'price'       => 'required',
        'photo'       => 'required',
        'currency'    => 'required',
        'category'    => 'required',
        'location'    => 'required'
    ];

    public static $messages = [
        'title.required' => 'Title is required',
        'description' => 'Description is required',
        'excerpt'     => 'Excerpt is required',
        'price'       => 'Price is required',
        'photo'       => 'Photo is required',
        'currency'    => 'Currency is required',
        'category'    => 'Category is required',
        'location'    => 'location is required'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(Categories::class);
    }

    public function location(){
        return $this->belongsTo(Locations::class, 'location_code', 'code');
    }
}
