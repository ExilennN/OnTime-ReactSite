@extends('welcome')

@section('content')    
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addModalLabel">Brand Creation</h1>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form action="{{route('brands.store')}}" method="post">
                @csrf
                <label>Name</label>
                    <div class="input-group mb-3">
                        <input type="text" name="name" class="form-control" placeholder="Name" aria-label="Name">
                    </div>
                <label>Image</label>
                    <div class="input-group mb-3">
                        <input type="text" name="image" class="form-control" placeholder="Image" aria-label="Image">
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
        <h1>Brands Management</h1>
        <button data-bs-toggle="modal" data-bs-target="#addModal" class="add-btn"><i class="fas fa-plus"></i>New Brand</button>
    </div>
    <table class="tableS">
        <thead class="tableHeaderS">
            <th width="30px">ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Creation Date</th>
            <th width="100px">Action</th>
        </thead>
        <tbody>
            @foreach($brands as $brand)
            <tr>
                <td>{{$brand->id}}</td>
                <td>{{$brand->name}}</td>
                <td>{{$brand->image}}</td>
                <td>{{$brand->created_at}}</td>
                <td style="display: flex; flex-direction: row; justify-content: space-around; align-content: center; padding-top: 7px;">
                    <a href="{{route('brands.edit', $brand->id)}}"><button class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button></a>
                    <form action="{{route('brands.destroy', $brand->id)}}" method="post">
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


