<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Device;
class DeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Device::create([
    'product_name'=>'Geladeira',
	'product_description'=>'Geladeira Frost Free Samsung French Door Family Hub SmartThings (Wi-Fi) com SpaceMax™ e Soundbar RF27T5501SG 614L Black Inox (220V)',
	'product_brand'=>'samsung',
    'product_image_link'=>'https://images-americanas.b2w.io/produtos/01/00/img/2492546/0/2492546041_1SZ.jpg'
        ]);
    }
}
