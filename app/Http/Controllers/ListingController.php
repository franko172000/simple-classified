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

        $page = isset($requestDatap['page']) ? $requestDatap['page'] : $this->PAGE_NO;
        $limit = isset($requestDatap['limit']) ? $requestDatap['page'] : $this->RECORD_LIMIT;

        $listing = $this->listingService->getListings($limit,$page);

        return ListingResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }

    public function store(ListingRequest $request){

        $data = $request->validated();
        $record = $this->listingService->addListing($data, 1);

        return new ListingResource($record);
    }
}
