<?php
namespace App\Repositories;

use App\Models\Listings;
use Illuminate\Support\Str;

class ListingRepository extends BaseRepository{

    public function __construct(Listings $model)
    {
        $this->model = $model;
    }

    /**
     * Get authenticated user listings
     *
     * @param integer $userId
     * @param integer $limit
     * @param integer $offset
     * @return array
     */
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

    /**
     * Get listings
     *
     * @param integer $limit
     * @param integer $offset
     * @return array
     */
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

    /**
     * Search listings
     *
     * @param [type] $keyword
     * @param integer $category
     * @param integer $limit
     * @param integer $offset
     * @return array
     */
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

    /**
     * Create new listing
     *
     * @param array $data
     * @return object
     */
    public function addListing(array $data){
        $record = $this->model->create($data);
        //create slug
        $record->slug = Str::slug($record->title,'-').'-'.$record->id;
        $record->save();
        return $record;
    }

    /**
     * Update listing
     *
     * @param array $data
     * @param string $slug
     * @return void
     */
    public function updateListing(array $data, string $slug){
        $this->model->where('slug', $slug)->update($data);

        //get updated record
        $record = $this->model->where('slug', $slug)->first();
        //create slug
        $record->slug = Str::slug($record->title,'-').'-'.$record->id;
        $record->save();
        
        return $record;
    }

    /**
     * get listing by slug
     *
     * @param string $slug
     * @return void
     */
    public function getListingBySlug(string $slug){
        $data = $this->model->where('slug',$slug)
        ->with('user')
        ->first();
        return $data;
    }

    /**
     * Get listing by id
     *
     * @param integer $id
     * @return object
     */
    public function getListingById(int $id){
        $data = $this->model->where('id',$id)
        ->with('images')
        ->first();
        return $data;
    }


    /**
     * Get listing by category
     *
     * @param integer $categoryId
     * @param integer $limit
     * @param integer $offset
     * @return array
     */
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

    /**
     * Change listing status
     *
     * @param integer $id
     * @param integer $status
     * @return void
     */
    public function changeStatus($id, $status){
        return $this->model->where('id',$id)->update([
            'status' => $status
        ]);
    }
}