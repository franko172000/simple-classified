<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Listings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('category_id')->unsigned();
            $table->string('location_code');
            $table->string('title', 255);
            $table->text('description');
            $table->string('excerpt', 255);
            $table->decimal('price',10,2);
            $table->string('currency');
            $table->string('photo',255);
            $table->string('slug', 255)->nullable();
            $table->enum('status',['online','offline'])->default('offline');
            $table->dateTime('last_date_online')->nullable();
            $table->dateTime('last_date_offline')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('location_code')->references('code')->on('locations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listings');
    }
}
