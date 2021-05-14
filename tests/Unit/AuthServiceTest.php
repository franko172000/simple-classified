<?php

namespace Tests\Unit;

use App\Models\User;
use App\Services\AuthService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class AuthServiceTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    private $authService;

    public function setUp(): void {
        parent::setUp();
        $this->authService = app(AuthService::class);
    }

    public function testCanCreateUser() {
        $data = $this->authService->createUser([
            'email' => 'test@test.com',
            'password' => '123456',
            'firstname' => 'Test',
            'lastname' => 'Test'
        ]);

        $this->assertEquals(1, $data->id);
        $this->assertEquals('test@test.com', $data->email);
        $this->assertEquals('Test Test', $data->name);
    }
}
