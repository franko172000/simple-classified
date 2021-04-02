<?php

namespace App\Http\Requests;

use App\Models\Listings;
use App\Traits\ResponseTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class ListingRequest extends FormRequest
{
    use ResponseTrait;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return Listings::$rules;
    }

    public function messages()
    {
        return Listings::$messages;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new ValidationException($validator,$this->responseValidation($validator->getMessageBag()->toArray()));
    }
}
