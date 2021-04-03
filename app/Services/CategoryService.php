<?php
namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService {
    /**
     * Undocumented variable
     *
     * @var [type]
     */
    private $repository;
    
    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getCategories(int $limit=10, int $page = 1){
        return $this->repository->findAll($limit,$page);
    }
}