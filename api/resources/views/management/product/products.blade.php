@extends('welcome')

@section('content')    
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addModalLabel">Product Creation</h1>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form action="{{route('products.store')}}" method="post">
                @csrf
                <div style="display: flex; flex-direction: row; justify-content: space-between" >
                    <div>
                        <label>Name</label>
                        <div class="input-group mb-3">
                            <input type="text" name="name" class="form-control" placeholder="Name" aria-label="Name">
                        </div>
                        <label>Brand</label>
                        <div class="input-group mb-3">
                            <select name="brand_id" class="form-select">
                                @foreach($brands as $brand)
                                    <option value="{{$brand->id}}">{{$brand->name}}</option>
                                @endforeach
                            </select>
                        </div>
                        <label>Price</label>
                        <div class="input-group mb-3">
                            <input type="number" name="price" class="form-control" placeholder="Price" aria-label="Price">
                        </div>
                        <label>Status</label>
                        <div class="input-group mb-3">
                            <input type="text" name="status" class="form-control" placeholder="Status" aria-label="Status"/>
                        </div>
                        <label>Color Case</label>
                        <div class="input-group mb-3">
                            <input type="text" name="color_case" class="form-control" placeholder="Color Case" aria-label="Color Case">
                        </div>
                        <label>Color Dial</label>
                        <div class="input-group mb-3">
                            <input type="text" name="color_dial" class="form-control" placeholder="Color Dial" aria-label="Color Dial">
                        </div>
                    </div>
                    <div>
                        <label>Color Strap</label>
                        <div class="input-group mb-3">
                            <input type="text" name="color_strap" class="form-control" placeholder="Color Strap" aria-label="Color Strap">
                        </div>
                        <label>Diameter</label>
                        <div class="input-group mb-3">
                            <input type="text" name="diameter" class="form-control" placeholder="Diameter" aria-label="Diameter">
                        </div>
                        <label>Material Strap</label>
                        <div class="input-group mb-3">
                            <input type="text" name="material_strap" class="form-control" placeholder="Material Strap" aria-label="Material Strap">
                        </div>
                        <label>Material Case</label>
                        <div class="input-group mb-3">
                            <input type="text" name="material_case" class="form-control" placeholder="Material Case" aria-label="Material Case">
                        </div>
                        <label>Movement</label>
                        <div class="input-group mb-3">
                            <input type="text" name="movement" class="form-control" placeholder="Movement" aria-label="Movement">
                        </div>
                        <label>Preview Image</label>
                        <div class="input-group mb-3">
                            <input type="text" name="preview_image" class="form-control" placeholder="Preview Image" aria-label="Preview Image">
                        </div>
                    </div>
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
        <h1>Products Management</h1>
        <button data-bs-toggle="modal" data-bs-target="#addModal" class="add-btn"><i class="fas fa-plus"></i>New Product</button>
    </div>
    <table class="tableS">
        <thead class="tableHeaderS">
            <th width="30px">ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th width="120px">Status</th>
            <th>Color Case</th>
            <th>Color Dial</th>
            <th>Color Strap</th>
            <th>Diameter</th>
            <th>Material Strap</th>
            <th>Material Case</th>
            <th>Movement</th>
            <th width="120px">Preview Image</th>
            <th>Creation Date</th>
            <th width="100px">Action</th>
        </thead>
        <tbody>
            @foreach($products as $product)
            <tr>
                <td>{{$product->id}}</td>
                <td>{{$product->name}}</td>
                <td>{{$product->brand->name}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->status}}</td>
                <td>{{$product->color_case}}</td>
                <td>{{$product->color_dial}}</td>
                <td>{{$product->color_strap}}</td>
                <td>{{$product->diameter}}</td>
                <td>{{$product->material_strap}}</td>
                <td>{{$product->material_case}}</td>
                <td>{{$product->movement}}</td>
                <td>{{$product->preview_image}}</td>
                <td>{{$product->created_at}}</td>
                <td style="display: flex; flex-direction: row; justify-content: space-around; align-content: center; padding-top: 7px;">
                    <a href="{{route('products.edit', $product->id)}}"><button class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button></a>
                    <form action="{{route('products.destroy', $product->id)}}" method="post">
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


