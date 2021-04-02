<?php
namespace App\Repositories;

use App\Models\Listings;

class ListingRepository extends BaseRepository{

    public function __construct(Listings $model)
    {
        $this->model = $model;
    }

    public function getUserListings(int $userId,int $offset = 0,int $limit = 10){
        $data = $this->paginated($offset,$limit)
        ->where('user_id',$userId)
        ->get();

        //get total record count
        $count = $this->model->where('user_id',$userId)->count();

        return ['data' => $data, 'total' => $count];
    }

    public function addListing(array $data){
        $record = $this->model->create($data);
        //create slug
        $record->slug = str_slug($record->title,'-').'-'.$record->id;
        return $record->save();
    }
}