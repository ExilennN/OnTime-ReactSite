@extends('welcome')

@section('content')    
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addModalLabel">Order Products Creation</h1>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form action="{{route('order-products.store')}}" method="post">
                @csrf
                <label>Order ID</label>
                <select name="order_id" class="form-control">
                    @foreach($orders as $order)
                        <option value="{{$order->id}}">{{$order->id}}</option>
                    @endforeach
                </select>
                <label>Product</label>
                <select name="product_id" class="form-control">
                    @foreach($products as $product)
                        <option value="{{$product->id}}">{{$product->name}}</option>
                    @endforeach
                </select>
                <label>Quantity</label>
                    <div class="input-group mb-3">
                        <input type="number" name="quantity" class="form-control" placeholder="Quantity" aria-label="Quantity">
                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: space-around">
                        <button class="close-btn" style="width: 200px" data-bs-dismiss="modal">Close</button>
                        <div class="done-btn"><input type="submit" style="width: 200px"  value="Add" /></div>
                    </div>
            </form>
        </div>
    </div>
  </div>
</div>

<div class="tableWrapper">
    <div class="product-bar-wrapper">
        <h1>Order Products Management</h1>
        <button data-bs-toggle="modal" data-bs-target="#addModal" class="add-btn"><i class="fas fa-plus"></i>New OProduct</button>
    </div>
    <table class="tableS">
        <thead class="tableHeaderS">
            <th width="30px">ID</th>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Creation Date</th>
            <th width="100px">Action</th>
        </thead>
        <tbody>
            @foreach($orderProducts as $orderProduct)
            <tr>
                <td>{{$orderProduct->id}}</td>
                <td>{{$orderProduct->order_id}}</td>
                <td>{{$orderProduct->product->name}}</td>
                <td>{{$orderProduct->quantity}}</td>
                <td>{{$orderProduct->created_at}}</td>
                <td style="display: flex; flex-direction: row; justify-content: space-around; align-content: center; padding-top: 7px;">
                    <a href="{{route('order-products.edit', $orderProduct->id)}}"><button class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button></a>
                    <form action="{{route('order-products.destroy', $orderProduct->id)}}" method="post">
                        @csrf
                        @method('delete')
                        
                        <div class="delete-btn"><input style="width: 30px; height: 30px; text-align: center; font-size: 18px; padding-bottom: 5px; padding-right: 2px" type="submit" value="X"></input></div>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection


