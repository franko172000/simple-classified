<?php
namespace App\Services;

use App\Models\User;
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
        return $this->repository->findAll($limit,$page);
    }

    public function getUserListings(int $userId, int $limit=10, int $page = 1){
        return $this->repository->getUserListings( $userId,$limit,$page);
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

        //TODO:// Upload image
    }

    public function getListing(string $slug){
        return $this->repository->getListingBySlug( $slug);
    }
    
    public function getCategoryListing(int $categoryId, int $limit=10, int $page = 1){
        return $this->repository->getListingByCategory($categoryId, $limit, $page);
    }
}