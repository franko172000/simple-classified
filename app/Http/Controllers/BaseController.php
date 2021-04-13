<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

abstract class BaseController extends Controller{
    /**
     * Total record limit
     * @var integer
     */
    protected $RECORD_LIMIT = 20;
    /**
     * Initial page to return
     *
     * @var integer
     */
    protected $PAGE_NO = 1;

    /**
     * Method to set record limit and page number 
     *
     * @param array $requestData
     * @return array
     */
    protected function getPaginationData(array $requestData) : array {
        $page = isset($requestData['page']) ? $requestData['page'] : $this->PAGE_NO;
        $limit = isset($requestData['limit']) ? $requestData['limit'] : $this->RECORD_LIMIT;
        return [$page,$limit];
    }
}
