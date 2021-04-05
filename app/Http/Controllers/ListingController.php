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

    private $listingService;

    public function __construct(ListingService $listingService){
        $this->listingService = $listingService;
    }

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

    public function store(ListingRequest $request){

        $data = $request->validated();

        $record = $this->listingService->addListing($data, auth()->user()->id);

        return new ListingResource($record);
    }


    public function delete($id){

        $record = $this->listingService->deleteListing($id);

        return $record ? $this->responseOk() : $this->responseNotFound("Listing does not exist");
    }

    public function listing($slug){

        $record = $this->listingService->getListing($slug);
        $listing = new ListingResource($record);
        return $listing->additional(['user' => $listing->user]);
    }

    public function userListing(){
        
        $listing = $this->listingService->getUserListings(auth()->user()->id);

        return ListingResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }

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

    public function uploadImage(TempImageRequest $request){
        $data = $request->validated();
        $record = $this->listingService->uploadTempImg($data);

        return new TempImageResource($record);
    }

    public function deleteTmpImage($id){
        $record = $this->listingService->deleteTmpImage($id);

        return $record ? $this->responseOk() : $this->responseNotFound("Image does not exist");
    }
    
    public function changeStatus(ListingStatusRequest $request, $id){
        $data = $request->validated();

        $record = $this->listingService->updateStatus($id, $data['status']);

        return $record ? $this->responseOk() : $this->responseNotFound("Listing does not exist");
    }
}
