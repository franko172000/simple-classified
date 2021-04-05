<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ListingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category_id' => $this->category_id,
            'category' => $this->category->name,
            'category_slug' => $this->category->slug,
            'location' => $this->location->name,
            'location_code' => $this->location_code,
            'title' => $this->title,
            'description' => $this->description,
            'excerpt' => $this->excerpt,
            'price' => $this->price,
            'images' => ListingImageResource::collection($this->images),
            'currency' => $this->currency,
            'slug' => $this->slug,
            'status' => $this->status ?? 'offline',
            'last_date_online' => $this->last_date_online,
            'last_date_offline' => $this->last_date_offline,
            'posted_at' => $this->created_at
        ];
    }
}
