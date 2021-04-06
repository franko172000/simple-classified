<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TempImageRequest extends FormRequest
{
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
        return [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ];
    }

    public function messages()
    {
        return [
            'photo.required' => 'Photo is required',
            'photo.image' => 'Invalid image format',
            'photo.max' => 'Maximum allowed image is 2mb'
        ];
    }
}
