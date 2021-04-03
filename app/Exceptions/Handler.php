<?php

namespace App\Exceptions;

use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{

    use ResponseTrait;
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Throwable
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if (($request->ajax() || $request->wantsJson() || $request->acceptsJson()) && $exception instanceof Exception) {

            return $this->getJsonResponse($exception);

        }
        return parent::render($request, $exception);
    }

    /**
    * Get the json response for the exception.

    *

    * @param Exception $exception

    * @return \Illuminate\Http\JsonResponse

    */

   protected function getJsonResponse(Exception $exception){

       $debugEnabled = config('app.debug');

       $mainException = $exception;

       $exception = $this->prepareException($exception);

       /*

        * Handle validation errors thrown using ValidationException.

        */

       if ($exception instanceof ValidationException) {
           $validationErrors = $exception->validator->errors()->getMessages();

            $errors = array_map(function($key, $value){
                return array($key=>$value[0]);
            },array_keys($validationErrors),$validationErrors);

           return $this->responseValidation($errors);
       }


       if ($exception instanceof AuthenticationException) {

           return $this->responseUnauthorized($exception->getMessage());

       }

       $message = $exception->getMessage();
       $errors = [];

      if ($debugEnabled) {
          $errors['exception'] = get_class($exception);

          $errors['trace'] = explode("\n", $exception->getTraceAsString());
      }

      //return $this->isHttpException($exception) ? $this->responseGeneral($exception->getStatusCode(),$message,$errors)  : $this->responseServerError($message);
      return $this->isHttpException($exception) ? $this->responseGeneral($exception->getStatusCode(),$message,$errors)  : $this->responseServerError($message);

   }
}
