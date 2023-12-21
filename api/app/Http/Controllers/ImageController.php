<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Images;
use App\Models\Products;
class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images = Images::all();
        return response()->json($images, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $image = new Images;
        if (!is_null($request)){
            $image->path = $request->path ? $request->path : "";
            if (!Products::where('id', $request->product_id)->exists()) { return response()->json(["error"=> "IMAGE CREATION ERROR: Product not found"], 404); }
            $image->product_id = $request->product_id;

            $image->save();
            return response()->json(["success"=> "Image created"], 200);
        }
        else{
            return response()->json(["error"=> "Image not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $image = Images::find($id);
        if (!empty($image)) {
            return response()->json($image, 200);
        }
        else{
            return response()->json(['error' => "Image not found"], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $image = Images::find($id);
        if (!empty($image)) {
            $image->path = $request->path ? $request->path : $image->path;
            if (Products::where('id', $request->product_id)->exists()) { $image->product_id = $request->product_id; }
        
            $image->save();
            return response()->json(['success' => "Image updated"], 200);
        }
        else{
            return response()->json(['error' => "Image not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Images::where('id', $id)->exists()){
            $image = Images::find($id);
            $image->delete();
            return response()->json(['success' => "Image deleted"], 202);
           }
           else{
            return response()->json(['error' => "Image not found"], 404);
           }
    }
}
