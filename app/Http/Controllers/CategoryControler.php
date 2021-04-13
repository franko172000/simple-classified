<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryControler extends BaseController
{   
    /**
     * CategoryService var
     *
     * @var CategoryService
     */
    private $categoryService;

    /**
     * Constructor method 
     *
     * @param CategoryService $service
     */
    public function __construct(CategoryService $service)
    {
        $this->categoryService = $service;
    }
    
    /**
     * Method to return paginated list of categories
     *
     * @param Request $request
     * @return void
     */
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

    /**
     * Mehtod to retur all categories
     *
     * @return void
     */
    public function allCategories(){

        $categories = $this->categoryService->getAllCategories();

        return CategoryResource::collection($categories);
    }
}
