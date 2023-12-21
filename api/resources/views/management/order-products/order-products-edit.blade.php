@extends('welcome')
@section('content')

<form action="{{route('order-products.update', $orderProduct->id)}}" method="post">
            @csrf
            @method('put')
            <div class="edit-header">
                    <h1>Edit {{$orderProduct->id}} Order Product</h1>
            </div>
            <div class="edit-body-vertical" >
            <label>Order ID</label>
                <select name="order_id" class="form-control">
                    @foreach($orders as $order)
                        <option {{$order->id == $orderProduct->order_id ? 'selected' : ''}}  value="{{$order->id}}">{{$order->id}}</option>
                    @endforeach
                </select>
                <label>Product</label>
                <select name="product_id" class="form-control">
                    @foreach($products as $product)
                        <option {{$product->id == $orderProduct->product_id ? 'selected' : ''}} value="{{$product->id}}">{{$product->name}}</option>
                    @endforeach
                </select>
                <label>Quantity</label>
                    <div class="input-group mb-3">
                        <input type="number" name="quantity" class="form-control" placeholder="Quantity" aria-label="Quantity" value="{{$orderProduct->quantity}}">
                    </div>
            </div>    
            <div class="edit-footer" class="text-center">
                <a href="{{route('order-products')}}"><div style="width: 250px" class="close-btn" >Back</div></a>
                <div class="done-btn"><input type="submit" style="width: 250px" value="Done"/></div>
            </div>
</form>

@endsection