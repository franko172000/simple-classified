<?php

namespace Tests\Unit;

use App\Models\ListingImages;
use App\Models\Listings;
use App\Models\TempListingImages;
use App\Models\User;
use App\Services\ListingService;
use CategorySeeder;
use DatabaseSeeder;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use LocationSeeder;
use RawDataSeed;
use Tests\TestCase;

class ListingServiceTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;


    private $user;
    private $listingService;
    private $listingData = [
        'title' => 'Test title',
        'description' => 'Test Description',
        'excerpt' => 'Test Excerpt',
        'price' => '5000',
        'currency' => 'NGN',
        'category' => '2',
        'location' => 'LA',
        'images' => []
    ]; 

    public $storagePath;

    public function setUp(): void 
    {
        parent::setUp();

        //seed data
        app(DatabaseSeeder::class)->call(CategorySeeder::class);
        app(DatabaseSeeder::class)->call(LocationSeeder::class);
        app(DatabaseSeeder::class)->call(RawDataSeed::class);

        //create new fake user
        $this->user = factory(User::class)->create();
        //instantiate listing class
        $this->listingService = app(ListingService::class);
        //file storage path;
        $this->storagePath = ListingImages::$storagePath;
    }

    public function testServiceCanGetListings() {
        $data = $this->listingService->getListings(5,1);
        $total = $this->getAllListings();

        $this->assertArrayHasKey('data', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertCount(5,$data['data']);
        $this->assertEquals($total,$data['total']);
    }

    public function testServiceCanSearchListingWithKeywordOnly(){
        $data = $this->listingService->searchListing([
            'keyword' => 'Mercedes-Benz',
            'category' => '0'
        ],5,1);

        $this->assertArrayHasKey('data', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertCount(1, $data['data']);
    }

    public function testServiceCanSearchListingWithKeywordAndCategory(){
        $data = $this->listingService->searchListing([
            'keyword' => 'Mercedes-Benz',
            'category' => '2'
        ],5,1);

        $this->assertArrayHasKey('data', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertCount(1, $data['data']);
    }

    public function testServiceCanUploadImage(){
        $data = $this->uploadFile();
        $this->assertInstanceOf(TempListingImages::class, $data);
        $this->assertEquals(1,$data->id);
        $this->assertFileExists(public_path($this->storagePath.$data->photo));
        //delete file
        $this->removeFile($data->photo);
    }

    public function testServiceCanAddListing(){
        //upload temp file
        $file = $this->uploadFile();

        //delete file
        $this->removeFile($file->photo);

        //set up images
        $this->listingData['images'][0] = [
            'id' => $file->id,
            'filename' => $file->photo
        ];

        //create new listing
        $data = $this->addListing();
        

        $this->assertInstanceOf(Listings::class, $data);
        $this->assertEquals($this->listingData['title'],$data->title);
        $this->assertEquals($this->listingData['description'],$data->description);
        $this->assertEquals($this->listingData['excerpt'],$data->excerpt);
        $this->assertEquals($this->listingData['price'],$data->price);
        $this->assertEquals($this->listingData['currency'],$data->currency);
        $this->assertEquals($this->listingData['category'],$data->category_id);
        $this->assertEquals($this->listingData['location'],$data->location_code);
        $this->assertEquals($this->user->id,$data->user_id);
    }

    public function testServiceCanDeleteTemporaryImage(){
        //upload temp file
        $file = $this->uploadFile();

        $result = $this->listingService->deleteTmpImage($file->id);

        $this->assertTrue($result);
        $this->assertFileDoesNotExist(public_path($this->storagePath.$file->photo));

        //clean up
        $this->removeFile($file->photo);
    }

    public function testServiceCanGetUserListing(){
        //create new listing
        $listing = $this->addListing();
        $data = $this->listingService->getUserListings($this->user->id);
        
        $this->assertArrayHasKey('data', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertCount(1,$data['data']);
        $this->assertEquals($this->user->id,$data['data'][0]->user_id);
    }

    public function testServiceCanUpdateListing(){
        //upload temp file
        $file1 = $this->uploadFile();
        $file2 = $this->uploadFile();

        //delete files
        $this->removeFile($file1->photo);
        $this->removeFile($file2->photo);
        
        $listing = $this->addListing();

        $title = "Title Update";
        $this->listingData['title'] = $title;
        $this->listingData['location'] = 'BO';
        $this->listingData['category'] = '3';
        $this->listingData['images'] = [
            [
                'id' => $file1->id,
                'filename' => $file1->photo,
                'new' => true,
                'removed' => false
            ],
            [
                'id' => $file2->id,
                'filename' => $file2->photo,
                'removed' => true
            ]
        ];

        $data = $this->listingService->updateListing($this->listingData, $listing->slug);

        $this->assertInstanceOf(Listings::class, $data);
        $this->assertEquals($this->listingData['title'],$data->title);
        $this->assertEquals($this->listingData['category'],$data->category_id);
        $this->assertEquals($this->listingData['location'],$data->location_code);
    }

    private function uploadFile(){
        $file = UploadedFile::fake()->image('test.png', 600, 600);
        return $this->listingService->uploadTempImg([
            'photo' => $file
        ]);
    }

    private function removeFile($fileName){
        $this->listingService->removeExistingFile($this->storagePath.$fileName);
    }

    private function addListing(){
        return $this->listingService->addListing($this->listingData, $this->user->id);
    }

    private function getAllListings(): int {
        return Listings::count();
    }
}
