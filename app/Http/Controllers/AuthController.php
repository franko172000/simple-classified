<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthService;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    use ResponseTrait;

    /**
     * Authservice variable
     *
     * @var AuthService
     */
    private $authService;

    /**
     * Constructor method
     *
     * @param AuthService $service
     */
    public function __construct(AuthService $service)
    {
        $this->authService = $service;
    }

    public function login(AuthRequest $request){
        $data = $request->validated();

        if(!auth()->attempt($data)){
            return $this->responseUnauthorized('Invalid credentials');
        }

        $token = auth()->user()->createToken('authToken')->accessToken;
        
        $resouce = new UserResource(auth()->user());

        return $resouce->additional(['access_token' => $token ]);
    }

    public function register(UserRequest $request){
        $data =  $request->validated();
        //create user
        $this->authService->createUser($data);

        return $this->responseCreated("User created");
    }

    public function logout(){
        $accesToken = auth()->user()->token();
        $accesToken->revoke();
        return $this->responseOk([],"User signed out!");
    }
}
