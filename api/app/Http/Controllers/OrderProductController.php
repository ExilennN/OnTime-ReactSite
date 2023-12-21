<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderProducts;
use App\Models\Products;
use App\Models\Orders;
class OrderProductController extends Controller
{
    public function all(){
        $orderProducts = OrderProducts::all();
        $orders = Orders::all();
        $products = Products::all();
        return view('management.order-products.order-products', ['orderProducts' => $orderProducts, 'orders' => $orders, 'products' => $products]);
    }

    public function create(Request $request)
    {
        $data = request()->validate([
            'order_id' => 'required|int',
            'product_id' => 'required|int',
            'quantity' => 'required|int'
        ]);

        OrderProducts::create($data);

        $orderProducts = OrderProducts::all();
        $orders = Orders::all();
        $products = Products::all();
        return view('management.order-products.order-products', ['orderProducts' => $orderProducts, 'orders' => $orders, 'products' => $products]);
    }
    public function edit(string $id)
    {
        $orderProduct = OrderProducts::find($id);
        $orders = Orders::all();
        $products = Products::all();
        return view('management.order-products.order-products-edit', ['orderProduct' => $orderProduct,'orders' => $orders, 'products' => $products]);

    }

    public function updateView(Request $request, string $id)
    {
        $data = request()->validate([
            'order_id' => 'required|int',
            'product_id' => 'required|int',
            'quantity' => 'required|int'
        ]);

        $edit = OrderProducts::find($id);
        $edit->order_id = $data['order_id'];
        $edit->product_id = $data['product_id'];
        $edit->quantity = $data['quantity'];

        $edit->save();
        $orderProduct= OrderProducts::find($id);
        $orders = Orders::all();
        $products = Products::all();
        return view('management.order-products.order-products-edit', ['orderProduct' => $orderProduct,'orders' => $orders, 'products' => $products]);
    }

    public function delete(string $id)
    {
        $orderProduct = OrderProducts::find($id);
        $orderProduct->delete();
        $orderProducts = OrderProducts::all();
        $orders = Orders::all();
        $products = Products::all();
        return view('management.order-products.order-products', ['orderProducts' => $orderProducts,'orders' => $orders, 'products' => $products]);
    }
    public function index()
    {
        $orderProducts = OrderProducts::all();
        return response()->json($orderProducts, 200);
    }


    public function store(Request $request)
    {
        $orderProduct = new OrderProducts;
        if (!is_null($request)){

            if(!Orders::where('id', $request->order_id)->exists()) { return response()->json(["error"=> "ORDER CREATION ERROR: Order ID not found"], 404);}
            $orderProduct->order_id = $request->order_id;

            if(!Products::where('id', $request->product_id)->exists()) { return response()->json(["error"=> "ORDER CREATION ERROR: Product not found"], 404);}
            $orderProduct->product_id = $request->product_id;

            $orderProduct->quantity = $request->quantity ? $request->quantity : 0;

            $orderProduct->save();
            return response()->json(["success"=> "Order Product created"], 200);
        }
        else{
            return response()->json(["error"=> "Order Product not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $orderProduct = OrderProducts::find($id);
        if (!empty($orderProduct)) {
            return response()->json($orderProduct, 200);
        }
        else{
            return response()->json(['error' => "Order Product not found"], 404);
        }
    }


    public function update(Request $request, string $id)
    {
        $orderProduct = OrderProducts::find($id);
        if (!empty($orderProduct)) {
            if(Orders::where('id', $request->order_id)->exists()) { $orderProduct->order_id = $request->order_id; }
            

            if(Products::where('id', $request->product_id)->exists()) { $orderProduct->product_id = $request->product_id;}
            

            $orderProduct->quantity = $request->quantity ? $request->quantity : $orderProduct->quantity;

            $orderProduct->save();
            return response()->json(['success' => "Order Product updated"], 200);
        }
        else{
            return response()->json(['error' => "Order Product not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(OrderProducts::where('id', $id)->exists()){
            $orderProduct = OrderProducts::find($id);
            $orderProduct->delete();
            return response()->json(['success' => "Order Product deleted"], 202);
           }
           else{
            return response()->json(['error' => "Order Product not found"], 404);
           }
    }
}
