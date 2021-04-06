<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryControler;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\LocationsControler;
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
        Route::get('/listings', [ListingController::class,'userListing'])->name('user-listings');
        Route::post('/listing/image/upload-image', [ListingController::class,'uploadImage'])->name('upload-listing-image');
        Route::delete('/listing/image/delete-temp/{id}', [ListingController::class,'deleteTmpImage'])->name('upload-listing-image');
        Route::patch('/listing/change-status/{id}', [ListingController::class,'changeStatus'])->name('change-listing-status');
        Route::post('/listing', [ListingController::class,'store'])->name('add-listing');
        Route::put('/listing/{slug}', [ListingController::class,'update'])->name('edit-listing');
        Route::delete('/listing/delete/{id}', [ListingController::class,'delete'])->name('delete-listing');
    });
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('listings')->group(function(){
    Route::get('/', [ListingController::class,'index'])->name('listings');
    Route::get('/search', [ListingController::class,'searchListing']);
    Route::get('/{slug}', [ListingController::class,'listing'])->name('single-listing');
    Route::get('/category/{id}', [ListingController::class,'categoryListing']);
});

Route::get('categories', [CategoryControler::class,'index'])->name('categories');
Route::get('categories/all', [CategoryControler::class,'allCategories'])->name('all-categories');
Route::get('locations', [LocationsControler::class,'index'])->name('locations');



