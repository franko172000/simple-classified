<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryControler;
use App\Http\Controllers\ListingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('/auth')->group(function(){
    Route::post('/login', [AuthController::class,'login']);
    Route::post('/register', [AuthController::class,'register']);
    Route::post('/logout', [AuthController::class,'logout'])->middleware('auth:api');
});


Route::prefix('/user')->group(function(){
    Route::group(['middleware' => ['auth:api']],function(){
        Route::get('/listings', [ListingController::class,'store'])->name('add-listing');
    });
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('listing')->group(function(){
    Route::group(['middleware' => ['auth:api']],function(){
        Route::post('/', [ListingController::class,'store'])->name('add-listing');
    });
    Route::get('/', [ListingController::class,'index'])->name('listing');
    Route::get('/{slug}', [ListingController::class,'listing'])->name('single-listing');
    Route::get('/category/{id}', [ListingController::class,'categoryListing']);
});

Route::get('categories', [CategoryControler::class,'index'])->name('categories');



