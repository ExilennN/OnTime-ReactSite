<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderProductController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('products', [ProductController::class,'all'])->name("products");
Route::post('products', [ProductController::class,'create'])->name("products.store");
Route::get('products/{id}/edit', [ProductController::class,'edit'])->name("products.edit");
Route::put('products/{id}', [ProductController::class, 'updateView'])->name('products.update');
Route::delete('products/{id}', [ProductController::class, 'delete'])->name('products.destroy');

Route::get('brands', [BrandController::class,'all'])->name("brands");
Route::post('brands', [BrandController::class,'create'])->name("brands.store");
Route::get('brands/{id}/edit', [BrandController::class,'edit'])->name("brands.edit");
Route::put('brands/{id}', [BrandController::class, 'updateView'])->name('brands.update');
Route::delete('brands/{id}', [BrandController::class, 'delete'])->name('brands.destroy');

Route::get('orders', [OrderController::class,'all'])->name("orders");
Route::post('orders', [OrderController::class,'create'])->name("orders.store");
Route::get('orders/{id}/edit', [OrderController::class,'edit'])->name("orders.edit");
Route::put('orders/{id}', [OrderController::class, 'updateView'])->name('orders.update');
Route::delete('orders/{id}', [OrderController::class, 'delete'])->name('orders.destroy');

Route::get('order-products', [OrderProductController::class,'all'])->name("order-products");
Route::post('order-products', [OrderProductController::class,'create'])->name("order-products.store");
Route::get('order-products/{id}/edit', [OrderProductController::class,'edit'])->name("order-products.edit");
Route::put('order-products/{id}', [OrderProductController::class, 'updateView'])->name('order-products.update');
Route::delete('order-products/{id}', [OrderProductController::class, 'delete'])->name('order-products.destroy');