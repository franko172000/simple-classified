<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListingRequest;
use App\Http\Requests\ListingStatusRequest;
use App\Http\Requests\TempImageRequest;
use App\Http\Resources\ListingResource;
use App\Http\Resources\TempImageResource;
use App\Services\ListingService;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class ListingController extends BaseController
{

    use ResponseTrait;

    /**
     * Undocumented variable
     *
     * @var ListingService
     */
    private $listingService;

    /**
     * Contructor method for class instantiation
     *
     * @param ListingService $listingService
     */
    public function __construct(ListingService $listingService){
        $this->listingService = $listingService;
    }

    /**
     * Method to return all listings with pagination
     *
     * @param Request $request
     * @return void
     */
    public function index(Request $request){
        $requestData = $request->all();

        [$page,$limit] = $this->getPaginationData($requestData);

        $listing = $this->listingService->getListings($limit,$page);

        return ListingResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }

    /**
     * Mehtod to search for listing based on matching criteria
     *
     * @param Request $request
     * @return void
     */
    public function searchListing(Request $request){
        $requestData = $request->all();

        [$page,$limit] = $this->getPaginationData($requestData);

        $listing = $this->listingService->searchListing($requestData,$limit,$page);
        // print_r($listing['data']);exit;
        return ListingResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }

    /**
     * Mehtod to save new listing
     *
     * @param ListingRequest $request
     * @return void
     */
    public function store(ListingRequest $request){

        $data = $request->validated();

        $record = $this->listingService->addListing($data, auth()->user()->id);

        return new ListingResource($record);
    }

    /**
     * Method to update listing via slug
     *
     * @param ListingRequest $request
     * @param string $slug
     * @return void
     */
    public function update(ListingRequest $request, string $slug){

        $data = $request->validated();

        $record = $this->listingService->updateListing($data, $slug);
        
        return $this->responseOk();
    }

    /**
     * Method to delete lsitings
     *
     * @param integer $id
     * @return void
     */
    public function delete($id){

        $record = $this->listingService->deleteListing($id);

        return $record ? $this->responseOk() : $this->responseNotFound("Listing does not exist");
    }

    /**
     * Method to get listing by slug
     *
     * @param string $slug
     * @return void
     */
    public function getListingBySlug(string $slug){

        $record = $this->listingService->getListing($slug);
        $listing = new ListingResource($record);
        return $listing->additional(['user' => $listing->user]);
    }

    /**
     * Mehtod to get listing by authenticated users
     *
     * @return void
     */
    public function userListing(){
        
        $listing = $this->listingService->getUserListings(auth()->user()->id);

        return ListingResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }

    /**
     * Method to get listings by categories
     *
     * @param Request $request
     * @param integer $id
     * @return void
     */
    public function categoryListing(Request $request,$id){
        $requestData = $request->all();

        [$page,$limit] = $this->getPaginationData($requestData);

        $listing = $this->listingService->getCategoryListing($id,$limit,$page);

        return ListingResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }

    /**
     * Method to upload listing images to a temporal location
     *
     * @param TempImageRequest $request
     * @return void
     */
    public function uploadImage(TempImageRequest $request){
        $data = $request->validated();
        $record = $this->listingService->uploadTempImg($data);

        return new TempImageResource($record);
    }

    /**
     * Method to delete temporary listing images
     *
     * @param integer $id
     * @return void
     */
    public function deleteTmpImage($id){
        $record = $this->listingService->deleteTmpImage($id);

        return $record ? $this->responseOk() : $this->responseNotFound("Image does not exist");
    }
    
    /**
     * Method to change listing status
     *
     * @param ListingStatusRequest $request
     * @param inetger $id
     * @return void
     */
    public function changeStatus(ListingStatusRequest $request, $id){
        $data = $request->validated();

        $record = $this->listingService->updateStatus($id, $data['status']);

        return $record ? $this->responseOk() : $this->responseNotFound("Listing does not exist");
    }
}
