<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListingRequest;
use App\Http\Resources\ListingResource;
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

    public function listing($slug){

        $record = $this->listingService->getListing($slug);

        return new ListingResource($record);
    }

    public function userListing(){
        
        $record = $this->listingService->getUserListings(auth()->user()->id);

        return new ListingResource($record);
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
}
