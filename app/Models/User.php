<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static $rules = [
        'firstname' => 'required | min:2',
        'lastname' => 'required|min:2',
        'email' => 'required|email',
        'password' => 'required'
    ];

    public static $messages = [
        'firstname.required' => 'First name is required',
        'lastname' => 'Last name is required',
        'email' => 'A valid email address is required',
        'password' => 'Paswword is required'
    ];

    public function listings(){
        return $this->hasMany(Listings::class);
    }
}
