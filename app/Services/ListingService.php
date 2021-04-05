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

    public function getListings(int $limit=10, int $page = 1){
        return $this->repository->findPaginated($limit,$page);
    }

    public function getUserListings(int $userId, int $limit=10, int $page = 1){
        return $this->repository->getUserListings( $userId,$limit,$page);
    }

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

    public function uploadTempImg($data){
        $imageName = $this->handleFileUpload($data['photo'],'public/img/ad-images');
        $record = $this->tempImageRepo->create([
            "photo" => $imageName
        ]);
        return $record;
    }

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

    public function updateStatus($id, $status){
        //get image data
        return $this->repository->changeStatus($id, $status);
    }

    public function getListing(string $slug){
        return $this->repository->getListingBySlug( $slug);
    }
    
    public function getCategoryListing(int $categoryId, int $limit=10, int $page = 1){
        return $this->repository->getListingByCategory($categoryId, $limit, $page);
    }
}