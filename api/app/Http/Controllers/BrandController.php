<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brands;
class BrandController extends Controller
{
    public function all(){
        $brands = Brands::all();
        return view('management.brand.brands', ['brands' => $brands]);
    }

    public function create(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'image' => 'required|string',
        ]);

        Brands::create($data);

        $brands = Brands::all();
        return view('management.brand.brands', ['brands' => $brands]);
    }
    public function edit(string $id)
    {
        $brand = Brands::find($id);
        return view('management.brand.brands-edit', ['brand' => $brand]);

    }

    public function updateView(Request $request, string $id)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'image' => 'required|string',
        ]);

        $edit = Brands::find($id);
        $edit->name = $data['name'];
        $edit->image = $data['image'];

        $edit->save();
        $brand= Brands::find($id);
        return view('management.brand.brands-edit', ['brand' => $brand]);
    }

    public function delete(string $id)
    {
        $brand = Brands::find($id);
        $brand->delete();
        $brands = Brands::all();
        return view('management.brand.brands', ['brands' => $brands]);
    }
    public function index()
    {
        $brands = Brands::all();
        return response()->json($brands, 200);
    }


    public function store(Request $request)
    {
        $brand = new Brands;
        if (!is_null($request)){
            $brand->name = $request->name ? $request->name : "";
            $brand->image = $request->image ? $request->image : "";
            $brand->save();
            return response()->json(["success"=> "Brand created"], 200);
        }
        else{
            return response()->json(["error"=> "Brand not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $brand = Brands::find($id);
        if (!empty($brand)) {
            return response()->json($brand, 200);
        }
        else{
            return response()->json(['error' => "Brand not found"], 404);
        }
    }


    public function update(Request $request, string $id)
    {
        $brand = Brands::find($id);
        if (!empty($brand)) {
            $brand->name = $request->name ? $request->name : $brand->name;
            $brand->image = $request->image ? $request->image : $brand->image;
            $brand->save();
            return response()->json(['success' => "Brand updated"], 200);
        }
        else{
            return response()->json(['error' => "Brand not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Brands::where('id', $id)->exists()){
            $brand = Brands::find($id);
            $brand->delete();
            return response()->json(['success' => "Brand deleted"], 202);
           }
           else{
            return response()->json(['error' => "Brand not found"], 404);
           }
    }
}
