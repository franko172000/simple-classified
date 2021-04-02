<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseController extends Controller{
    protected $RECORD_LIMIT = 20;
    protected $PAGE_NO = 1;
}
