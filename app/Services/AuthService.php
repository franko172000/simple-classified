<?php
namespace App\Services;

use App\Repositories\AuthRefereshTokenRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\UserRepository;

class AuthService {
    /**
     * App\Repositories\UserRepository $repository
     *
     * @var [object]
     */
    private $repository;

    /**
     * Contructor method
     *
     * @param UserRepository $repository
     * @param AuthRefereshTokenRepository $tokenRepo
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function createUser(array $data){
        return $this->repository->create([
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'name' => $data['firstname'] ." ". $data['lastname']
        ]);
    }
}