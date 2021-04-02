<?php
namespace App\Services;

use App\Repositories\ListingRepository;

class ListingService {
    /**
     * Undocumented variable
     *
     * @var [type]
     */
    private $repository;
    
    public function __construct(ListingRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getListings(int $limit=10, int $page = 1){
        return $this->repository->findAll($limit);
    }

    public function getUserListings(int $limit=10, int $page = 1){
        return $this->repository->findAll($limit);
    }

    public function addListing(array $data, int $userId){
        return $this->repository->addListing([
            'title' => $data['title'],
            'description' => $data['description'],
            'excerpt' => $data['excerpt'],
            'price' => $data['price'],
            'photo' => $data['photo'],
            'currency' => $data['currency'],
            'category_id' => $data['category'],
            'location_code' => $data['location'],
            'user_id' => $userId,
        ]);
    }
}