<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    //use HasFactory;
    protected $fillable = [
        'product_name',
        'product_description',
        'product_brand',
        'product_image_link',
    ];
}
