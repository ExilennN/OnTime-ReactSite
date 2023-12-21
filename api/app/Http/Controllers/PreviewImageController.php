<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PreviewImages;
class PreviewImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $previewImages = PreviewImages::all();
        return response()->json($previewImages, 200);
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
        $previewImage = new PreviewImages;
        if (!is_null($request)){
            $previewImage->path = $request->path ? $request->path : "";
            $previewImage->save();
            return response()->json(["success"=> "Preview Image created"], 200);
        }
        else{
            return response()->json(["error"=> "Preview Image not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $previewImage = PreviewImages::find($id);
        if (!empty($previewImage)) {
            return response()->json($previewImage, 200);
        }
        else{
            return response()->json(['error' => "Preview Image not found"], 404);
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
        $previewImage = PreviewImages::find($id);
        if (!empty($previewImage)) {
            $previewImage->path = $request->path ? $request->path : $previewImage->path;
            $previewImage->save();
            return response()->json(['success' => "Preview Image updated"], 200);
        }
        else{
            return response()->json(['error' => "Preview Image not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(PreviewImages::where('id', $id)->exists()){
            $previewImage = PreviewImages::find($id);
            $previewImage->delete();
            return response()->json(['success' => "Preview Image deleted"], 202);
           }
           else{
            return response()->json(['error' => "Preview Image not found"], 404);
           }
    }
}
