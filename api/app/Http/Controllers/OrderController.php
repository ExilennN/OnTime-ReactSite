<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrderController extends Controller
{
    
    public function all(){
        $orders = Orders::all();
        return view('management.order.orders', ['orders' => $orders]);
    }

    public function create(Request $request)
    {
        Orders::create();

        $orders = Orders::all();
        return view('management.order.orders', ['orders' => $orders]);
    }
    public function edit(string $id)
    {
        $order= Orders::find($id);
        return view('management.order.orders-edit', ['order' => $order]);

    }

    public function updateView(Request $request, string $id)
    {
        $data = request();

        $edit = Orders::find($id);

        $edit->save();
        $order= Orders::find($id);
        return view('management.order.orders-edit', ['order' => $order]);
    }

    public function delete(string $id)
    {
        $order= Orders::find($id);
        $order->delete();
        $orders = Orders::all();
        return view('management.order.orders', ['orders' => $orders]);
    }
    public function index()
    {
        $orders = Orders::all();
        return response()->json($orders, 200);
    }


    public function store(Request $request)
    {
        $order= new Orders;
        if (!is_null($request)){
            $order->save();
            return response()->json(["success"=> "order created", "id" => $order->id], 200);
        }
        else{
            return response()->json(["error"=> "order not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order= Orders::find($id);
        if (!empty($order)) {
            return response()->json($order, 200);
        }
        else{
            return response()->json(['error' => "order not found"], 404);
        }
    }


    public function update(Request $request, string $id)
    {
        $order= Orders::find($id);
        if (!empty($order)) {
            $order->save();
            return response()->json(['success' => "order updated"], 200);
        }
        else{
            return response()->json(['error' => "order not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Orders::where('id', $id)->exists()){
            $order= Orders::find($id);
            $order->delete();
            return response()->json(['success' => "order deleted"], 202);
           }
           else{
            return response()->json(['error' => "order not found"], 404);
           }
    }
}
