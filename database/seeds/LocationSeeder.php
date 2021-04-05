<?php

use App\Models\Locations;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    private $locations = [
        'FC' => 'Abuja',
        'AB' => 'Abia',
        'AD' => 'Adamawa',
        'AK' => 'Akwa Ibom',
        'AN' => 'Anambra',
        'BA' => 'Bauchi',
        'BY' => 'Bayelsa',
        'BE' => 'Benue',
        'BO' => 'Borno',
        'CR' => 'Cross River',
        'DE' => 'Delta',
        'EB' => 'Ebonyi',
        'ED' => 'Edo',
        'EK' => 'Ekiti',
        'EN' => 'Enugu',
        'GO' => 'Gombe',
        'IM' => 'Imo',
        'JI' => 'Jigawa',
        'KD' => 'Kaduna',
        'KN' => 'Kano',
        'KT' => 'Katsina',
        'KE' => 'Kebbi',
        'KO' => 'Kogi',
        'KW' => 'Kwara',
        'LA' => 'Lagos',
        'NA' => 'Nassarawa',
        'NI' => 'Niger',
        'OG' => 'Ogun',
        'ON' => 'Ondo',
        'OS' => 'Osun',
        'OY' => 'Oyo',
        'PL' => 'Plateau',
        'RI' => 'Rivers',
        'SO' => 'Sokoto',
        'TA' => 'Taraba',
        'YO' => 'Yobe',
        'ZA' => 'Zamfara'
    ];
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        $locationArrays = [];
        foreach($this->locations as $key => $val){
            array_push($locationArrays,[
                "code" => $key,
                "name" => $val
            ]);
        }

        //seed data
        Locations::insert($locationArrays);
    }
}