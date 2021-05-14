<?php

namespace Tests\Unit;

use App\Models\Categories;
use App\Services\CategoryService;
use CategorySeeder;
use DatabaseSeeder;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class CategoryServiceTest extends TestCase
{
    use DatabaseMigrations;

    private $categoryService;

    public function setUp(): void {
        parent::setUp();
        //seed category
        app(DatabaseSeeder::class)->call(CategorySeeder::class);
        //set up service
        $this->categoryService = app(CategoryService::class);
        
    }

    public function testCategoryCanReturnPaginatedData(){
        //get all categories
        $total = $this->getTotalCategories();
        //get paginated records
        $data = $this->categoryService->getCategories(5,1);

        $this->assertArrayHasKey('data', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertCount(5,$data['data']);
        $this->assertEquals($total,$data['total']);
    }

    public function testCategoryCanReturnAllRecords(){
        $totalReturned = count($this->categoryService->getAllCategories());
        $totalRecord = $this->getTotalCategories();
        $this->assertEquals($totalRecord,$totalReturned);
    }

    private function getTotalCategories() : int {
        return Categories::count();
    }
}
