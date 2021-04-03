<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryControler extends BaseController
{   
    private $categoryService;

    public function __construct(CategoryService $service)
    {
        $this->categoryService = $service;
    }
    
    public function index(Request $request){

        $requestData = $request->all();

        [$page,$limit] = $this->getPaginationData($requestData);

        $listing = $this->categoryService->getCategories($limit,$page);

        return CategoryResource::collection($listing['data'])
        ->additional([
            'total_records' => $listing['total'],
            'total_returned' => count($listing['data'])
            ]);
    }
}
