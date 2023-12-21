<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Brands;
class ProductController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function all(){
        $products = Products::all();
        $brands = Brands::all();
        return view('management.product.products', ['products' => $products, 'brands' => $brands]);
    }

    public function create(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'brand_id' => "required|int",
            'price' => 'required|int',
            'color_case' => 'required|string',
            'color_dial' => 'required|string',
            'color_strap' => 'required|string',
            'diameter' => 'required|string',
            'material_strap' => 'required|string',
            'material_case' => 'required|string',
            'movement' => 'required|string',
            'status' => 'required|string',
            'preview_image' => 'required|string',
        ]);

        Products::create($data);

        $products = Products::all();
        $brands = Brands::all();
        return view('management.product.products', ['products' => $products, 'brands' => $brands]);
    }
    public function edit(string $id)
    {
        $product = Products::find($id);
        $brands = Brands::all();
        return view('management.product.products-edit', ['product' => $product, 'brands' => $brands]);

    }

    public function updateView(Request $request, string $id)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'brand_id' => "required|int",
            'price' => 'required|int',
            'color_case' => 'required|string',
            'color_dial' => 'required|string',
            'color_strap' => 'required|string',
            'diameter' => 'required|string',
            'material_strap' => 'required|string',
            'material_case' => 'required|string',
            'movement' => 'required|string',
            'status' => 'required|string',
            'preview_image' => 'required|string',
        ]);

        $edit = Products::find($id);
        $edit->name = $data['name'];
        $edit->brand_id = $data['brand_id'];
        $edit->price = $data['price'];
        $edit->color_case = $data['color_case'];
        $edit->color_dial = $data['color_dial'];
        $edit->color_strap = $data['color_strap'];
        $edit->diameter = $data['diameter'];
        $edit->material_strap = $data['material_strap'];
        $edit->material_case = $data['material_case'];
        $edit->movement = $data['movement'];
        $edit->status = $data['status'];
        $edit->preview_image = $data['preview_image'];

        $edit->save();

        $product = Products::find($id);
        $brands = Brands::all();
        return view('management.product.products-edit', ['product' => $product, 'brands' => $brands]);
    }

    public function delete(string $id)
    {
        $product = Products::find($id);
        $product->delete();
        $products = Products::all();
        $brands = Brands::all();
        return view('management.product.products', ['products' => $products, 'brands' => $brands]);
    }

    public function index()
    {
        $products = Products::all();
        return response()->json($products, 200);
    }


    public function store(Request $request)
    {
        $product = new Products;
        if (!is_null($request)){
            $product->name = $request->name ? $request->name : "";
            $product->price = $request->price ? $request->price : 0;
            $product->color_case = $request->color_case ? $request->color_case : "";
            $product->color_dial = $request->color_dial ? $request->color_dial : "";
            $product->color_strap = $request->color_strap ? $request->color_strap : "";
            $product->diameter = $request->diameter ? $request->diameter : "";
            $product->material_strap = $request->material_strap ? $request->material_strap : "";
            $product->material_case = $request->material_case ? $request->material_case : "";
            $product->movement = $request->movement ? $request->movement : "";
            $product->status = $request->status ? $request->status : "";
            $product->preview_image = $request->preview_image ? $request->preview_image : "";


            if(!Brands::where('id', $request->brand_id)->exists()) { return response()->json(["error"=> "PRODCUT CREATION ERROR: Brand not found"], 404);}
            $product->brand_id = $request->brand_id;
            
            $product->save();
            return response()->json(["success"=> "Product created"], 200);
        }
        else{
            return response()->json(["error"=> "Product not created"], 404);
        }
       
    }


    public function show(string $id)
    {
        $product = Products::find($id);
        if (!empty($product)) {
            return response()->json($product, 200);
        }
        else{
            return response()->json(['error' => "Product not found"], 404);
        }
    }


    public function update(Request $request, string $id)
    {
        $product = Products::find($id);
        if (!empty($product)) {
            $product->name = $request->name ? $request->name : $product->name;
            $product->price = $request->price ? $request->price : $product->price;
            $product->color_case = $request->color_case ? $request->color_case : $product->color_case;
            $product->color_dial = $request->color_dial ? $request->color_dial : $product->color_dial;
            $product->color_strap = $request->color_strap ? $request->color_strap : $product->color_strap;
            $product->diameter = $request->diameter ? $request->diameter : $product->diameter;
            $product->material_strap = $request->material_strap ? $request->material_strap : $product->material_strap;
            $product->material_case = $request->material_case ? $request->material_case : $product->material_case;
            $product->movement = $request->movement ? $request->movement : $product->movement;
            $product->status = $request->status ? $request->status : $product->status;
            $product->preview_image = $request->preview_image ? $request->preview_image : $product->preview_image;

            if(Brands::where('id', $request->brand_id)->exists()) { $product->brand_id = $request->brand_id; }
            
            $product->save();
            return response()->json(['success' => "Product updated"], 200);
        }
        else{
            return response()->json(['error' => "Product not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Products::where('id', $id)->exists()){
            $product = Products::find($id);
            $product->delete();
            return response()->json(['success' => "Product deleted"], 202);
           }
           else{
            return response()->json(['error' => "Product not found"], 404);
           }
    }
}
