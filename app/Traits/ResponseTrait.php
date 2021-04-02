<?php

namespace App\Traits;

trait ResponseTrait{

    public function responseOk(array $data=[],string $message = "OK"){
        return $this->formatResponse(200,$message,$data);
    }

    public function responseCreated(string $message, array $data=[]){
        return $this->formatResponse(201,$message,$data);
    }

    public function responseNotFound(string $message, array $errors=[]){
        return $this->formatResponse(404,$message,$errors);
    }

    public function responseConflict(string $message, array $errors=[]){
        return $this->formatResponse(409,$message,$errors);
    }

    public function responseBadRequest(string $message, array $errors=[]){
        return $this->formatResponse(400,$message,$errors);
    }

    public function responseValidation(array $errors=[]){
        return $this->formatResponse(422,"Your request could not be processed",$errors);
    }

    public function responseUnauthorized(string $message, array $errors=[]){
        return $this->formatResponse(401,$message,[],$errors);
    }

    public function responseServerError(string $message, array $errors=[]){
        return $this->formatResponse(500,$message,[],$errors);
    }

    private function formatResponse(int $statusCode, string $message, array $data=[], array $errors=[]){
       $response = [
        'message' => $message,
        'statusCode' => $statusCode,
       ];

       if(count($data) > 0){
           $response['data']=$data;
       }

       if(count($errors) > 0){
           $response['errors']=$errors;
       }

       return response()->json($response,$statusCode);
    }
}