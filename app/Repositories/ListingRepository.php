<?php
namespace App\Repositories;

use App\Models\Listings;
use Illuminate\Support\Str;

class ListingRepository extends BaseRepository{

    public function __construct(Listings $model)
    {
        $this->model = $model;
    }

    public function getUserListings(int $userId,int $limit = 10, int $offset = 0){
        $data = $this->paginated($offset,$limit)
        ->where('user_id',$userId)
        ->orderBy('created_at','desc')
        ->get();

        //get total record count
        $count = $this->model
        ->where('user_id',$userId)
        ->count();

        return ['data' => $data, 'total' => $count];
    }

    public function getListings(int $limit = 10, int $offset = 0){
        $data = $this->paginated($offset,$limit)
        ->where('status', 'online')
        ->orderBy('created_at','desc')
        ->get();

        //get total record count
        $count = $this->model
        ->where('status', 'online')
        ->count();

        return ['data' => $data, 'total' => $count];
    }

    public function addListing(array $data){
        $record = $this->model->create($data);
        //create slug
        $record->slug = Str::slug($record->title,'-').'-'.$record->id;
        $record->save();
        return $record;
    }

    public function getListingBySlug(string $slug){
        $data = $this->model->where('slug',$slug)
        ->with('user')
        ->first();
        return $data;
    }

    public function getListingById(int $id){
        $data = $this->model->where('id',$id)
        ->with('images')
        ->first();
        return $data;
    }

    public function getListingByCategory(int $categoryId, int $limit = 10, int $offset = 0){
        $data = $this->paginated($offset,$limit)
        ->where('category_id',$categoryId)
        ->where('status', 'online')
        ->orderBy('created_at','desc')
        ->get();

        //get total record count
        $count = $this->model
        ->where('category_id',$categoryId)
        ->where('status', 'online')
        ->count();

        return ['data' => $data, 'total' => $count];
    }

    public function changeStatus($id, $status){
        return $this->model->where('id',$id)->update([
            'status' => $status
        ]);
    }
}