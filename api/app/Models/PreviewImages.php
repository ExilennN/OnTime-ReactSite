<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreviewImages extends Model
{
    use HasFactory;

    protected $table = 'preview_images';

    protected $fillable = [
        'path',
    ];
}
