<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct(){}

    /**
     * Method to load the SPA app
     *
     * @return void
     */
    public function index(){
        return view('home');
    }
}
