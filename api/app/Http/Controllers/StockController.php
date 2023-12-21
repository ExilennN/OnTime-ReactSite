<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stocks;
class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stocks = Stocks::all();
        return response()->json($stocks, 200);
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
        $stock = new Stocks;
        if (!is_null($request)){
            $stock->name = $request->name ? $request->name : "";
            $stock->save();
            return response()->json(["success"=> "Stock created"], 200);
        }
        else{
            return response()->json(["error"=> "Stock not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $stock = Stocks::find($id);
        if (!empty($stock)) {
            return response()->json($stock, 200);
        }
        else{
            return response()->json(['error' => "Stock not found"], 404);
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
        $stock = Stocks::find($id);
        if (!empty($stock)) {
            $stock->name = $request->name ? $request->name : $stock->name;
            $stock->save();
            return response()->json(['success' => "Stock updated"], 200);
        }
        else{
            return response()->json(['error' => "Stock not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Stocks::where('id', $id)->exists()){
            $stock = Stocks::find($id);
            $stock->delete();
            return response()->json(['success' => "Stock deleted"], 202);
           }
           else{
            return response()->json(['error' => "Stock not found"], 404);
           }
    }
}
