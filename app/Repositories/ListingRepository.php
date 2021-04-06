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

    public function searchListing($keyword, $category=0,int $limit = 10, int $offset = 0){
        $dataObj = $this->paginated($offset,$limit)
        ->where('status', 'online')
        ->where('title','LIKE','%' . $keyword . '%')
        ->orderBy('created_at','desc');

        //get total record count
        $countObj = $this->model
        ->where('title','LIKE','%' . $keyword . '%')
        ->where('status', 'online');

        if($category > 0){
            $dataObj->where('category_id',$category);
            $countObj->where('category_id',$category);
        }
        
        // $count->count();
        $data = $dataObj->get();
        $count = $countObj->count();
        

        return ['data' => $data, 'total' => $count];
    }

    public function addListing(array $data){
        $record = $this->model->create($data);
        //create slug
        $record->slug = Str::slug($record->title,'-').'-'.$record->id;
        $record->save();
        return $record;
    }

    public function updateListing(array $data, string $slug){
        $this->model->where('slug', $slug)->update($data);

        //get updated record
        $record = $this->model->where('slug', $slug)->first();
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