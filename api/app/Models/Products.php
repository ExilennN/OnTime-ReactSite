<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Brands;
use App\Models\Stocks;
use App\Models\PreviewImages;

// {id: 0, brand: "Omega", name: "Seamaster", price: "7 350", 
//     specification: {colorCase: "Silver", colorDial: "Black", colorStrap: "Black", diameter: "42 mm", materialStrap: "Rubber", materialCase: "Stainless steel", movement: "Automatic"}, 
//     previewImage: previewProductImg1, images: [osImg1, osImg2, osImg3], inStock: true,
//     comments: [{ user: "Amelie Lacroix", text: "Wonderfull watch, stylish and comfortable. Buy this one for my cherie, she was so exited"},
//                { user: "Yasuo", text: "Some good choice for price!"}]}

class Products extends Model
{
    use HasFactory;

    protected $table = "products";

    protected $fillable = [
        'name',
        'brand_id',
        'price',
        'status',
        'color_case',
        'color_dial',
        'color_strap',
        'diameter',
        'material_strap',
        'material_case',
        'movement',
        'preview_image',
    ];

    public function brand()
    {
        return $this->belongsTo(Brands::class, "brand_id");
    }
}
