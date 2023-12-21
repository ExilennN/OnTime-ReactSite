<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('brand_id');
            $table->bigInteger('price');
            $table->bigInteger('stock_status_id');
            $table->string('color_case');
            $table->string('color_dial');
            $table->string('color_strap');
            $table->string('diameter');
            $table->string('material_strap');
            $table->string('material_case');
            $table->string('movement');
            $table->bigInteger('preview_image_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
