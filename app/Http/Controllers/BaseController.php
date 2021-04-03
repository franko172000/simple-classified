<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

abstract class BaseController extends Controller{
    protected $RECORD_LIMIT = 20;
    protected $PAGE_NO = 1;

    protected function getPaginationData(array $requestData) : array {
        $page = isset($requestData['page']) ? $requestData['page'] : $this->PAGE_NO;
        $limit = isset($requestData['limit']) ? $requestData['limit'] : $this->RECORD_LIMIT;
        return [$page,$limit];
    }
}
