<?php
namespace App\Services;

use App\Repositories\CategoryRepository;
use App\Repositories\UserRepository;

class AuthService {
    /**
     * App\Repositories\UserRepository repository
     *
     * @var [object]
     */
    private $repository;
    
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function createUser(array $data){
        return $this->repository->create([
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'name' => $data['firstName'] ." ". $data['lastName']
        ]);
    }

}