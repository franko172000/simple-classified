<?php
namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService {
    /**
     * Undocumented variable
     *
     * @var CategoryRepository
     */
    private $repository;
    
    /**
     * Instatiates the service class
     *
     * @param CategoryRepository $repository
     */
    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Get paginated categories
     *
     * @param integer $limit
     * @param integer $page
     * @return void
     */
    public function getCategories(int $limit=10, int $page = 1){
        return $this->repository->findPaginated($limit,$page);
    }

    /**
     * Gte list of categories
     *
     * @return void
     */
    public function getAllCategories(){
        return $this->repository->all();
    }
}