<?php
namespace App\Services;

use App\Traits\FileHelperTrait;
use App\Repositories\ListingImageRepository;
use App\Repositories\ListingRepository;
use App\Repositories\TempListingImageRepository;
use App\Models\ListingImages;

class ListingService {

    use FileHelperTrait;
    /**
     * Listing repository variable
     *
     * @var ListingRepository
     */
    private $repository;

    /**
     * Image repository variable
     *
     * @var ListingImageRepository
     */
    private $imageRepo;
    
    /**
     * Constructor
     *
     * @param ListingRepository $repository
     * @param ListingImageRepository $imageRepo
     */

    /**
     * Temporary image repository variable
     *
     * @var TempListingImageRepository
     */
    private $tempImageRepo;

    public function __construct(ListingRepository $repository, ListingImageRepository $imageRepo, TempListingImageRepository $tempImageRepo)
    {
        $this->repository = $repository;
        $this->imageRepo = $imageRepo;
        $this->tempImageRepo = $tempImageRepo;
    }

    /**
     * Get listings
     *
     * @param integer $limit
     * @param integer $page
     * @return void
     */
    public function getListings(int $limit=10, int $page = 1){
        return $this->repository->getListings($limit,$page);
    }

    /**
     * Search listing based on matching criteria
     *
     * @param array $data
     * @param integer $limit
     * @param integer $page
     * @return array
     */
    public function searchListing(array $data,int $limit=10, int $page = 1){
        return $this->repository->searchListing($data['keyword'], $data['category'],$limit,$page);
    }

    /**
     * Get authenticated user listings
     *
     * @param integer $userId
     * @param integer $limit
     * @param integer $page
     * @return array
     */
    public function getUserListings(int $userId, int $limit=10, int $page = 1){
        return $this->repository->getUserListings($userId,$limit,$page);
    }

    /**
     * Add new listing
     *
     * @param array $data
     * @param integer $userId
     * @return object
     */
    public function addListing(array $data, int $userId){
        //save listing data
        $listingData = $this->repository->addListing([
            'title' => $data['title'],
            'description' => $data['description'],
            'excerpt' => $data['excerpt'],
            'price' => $data['price'],
            'currency' => $data['currency'],
            'category_id' => $data['category'],
            'location_code' => $data['location'],
            'user_id' => $userId,
        ]);

        //iterate through the image array
         array_map(function($image) use ($listingData){

             //save images
            $this->imageRepo->create([
                "listing_id" => $listingData->id,
                "photo" => $image['filename']
            ]);

            //delete temp images
            $this->tempImageRepo->deleteById($image['id']);

        },$data['images']);

        return $listingData;
    }

    /**
     * Update listing
     *
     * @param array $data
     * @param string $slug
     * @return void
     */
    public function updateListing(array $data, string $slug){
        //save listing data
        $listingData = $this->repository->updateListing([
            'title' => $data['title'],
            'description' => $data['description'],
            'excerpt' => $data['excerpt'],
            'price' => $data['price'],
            'currency' => $data['currency'],
            'category_id' => $data['category'],
            'location_code' => $data['location']
        ],$slug);

        //iterate through the image array
         array_map(function($image) use ($listingData){

             //save images
             if(isset($image['new']) && $image['new']){
                $this->imageRepo->create([
                    "listing_id" => $listingData->id,
                    "photo" => $image['filename']
                ]);
             }

             //remove image
             if($image['removed']){
                $this->imageRepo->deleteById($image['id']);
                //delete file
                $this->removeExistingFile(ListingImages::$storagePath.$image['filename']);
             }

        },$data['images']);

        return $listingData;
    }

    /**
     * Upload images to temporary location
     *
     * @param array $data
     * @return void
     */
    public function uploadTempImg(array $data){
        $imageName = $this->handleFileUpload($data['photo'],'public/img/ad-images');
        $record = $this->tempImageRepo->create([
            "photo" => $imageName
        ]);
        return $record;
    }

    /**
     * Delete temporary image
     *
     * @param integer $id
     * @return void
     */
    public function deleteTmpImage($id){
        //get image data
        $data = $this->tempImageRepo->getSingleById($id);
        //remove image
        if($data){
            $this->tempImageRepo->deleteById($id);
            $this->removeExistingFile(ListingImages::$storagePath.$data['photo']);
            return true;
        }
    }

    /**
     * Delete listing
     *
     * @param integer $id
     * @return void
     */
    public function deleteListing($id){
        //get images
        $data = $this->repository->getListingById($id);
        
        if($data){
            $data->delete();
            //remove image
            if($data->images){
                array_map(function($image){
                    $this->removeExistingFile(ListingImages::$storagePath.$image['photo']);
                },$data->images->toArray());
            }
            return true;
        }
        
    }

    /**
     * update listing status
     *
     * @param integer $id
     * @param string $status
     * @return void
     */
    public function updateStatus($id, $status){
        //get image data
        return $this->repository->changeStatus($id, $status);
    }

    /**
     * Get single listing
     *
     * @param string $slug
     * @return object
     */
    public function getListing(string $slug){
        return $this->repository->getListingBySlug( $slug);
    }
    
    /**
     * Get listings by category
     *
     * @param integer $slug
     * @param integer $limit
     * @param integer $page
     * @return array
     */
    public function getCategoryListing(int $slug, int $limit=10, int $page = 1){
        return $this->repository->getListingByCategory($slug, $limit, $page);
    }
}