<?php

use App\Models\Categories;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    private $categories = [
        [
            "name" => "Animals",
            "icon" => "animals.png",
            "slug" => "animals"
        ],
        [
            "name" => "Automobile",
            "icon" => "automobile.png",
            "slug" => "automobile"
        ],
        [
            "name" => "Education",
            "icon" => "education.png",
            "slug" => "education"
        ],
        [
            "name" => "Electronics",
            "icon" => "electronics.png",
            "slug" => "electronics"
        ],
        [
            "name" => "Fashion",
            "icon" => "fashion.png",
            "slug" => "fashion"
        ],
        [
            "name" => "Food",
            "icon" => "food.png",
            "slug" => "food"
        ],
        [
            "name" => "Furniture",
            "icon" => "furniture.png",
            "slug" => "furniture"
        ],
        [
            "name" => "Gadgets",
            "icon" => "gadgets.png",
            "slug" => "gadgets"
        ],
        [
            "name" => "Properties",
            "icon" => "properties.png",
            "slug" => "properties"
        ],
        [
            "name" => "Services",
            "icon" => "services.png",
            "slug" => "services"
        ]
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Categories::insert($this->categories);
    }
}
