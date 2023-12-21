@extends('welcome')
@section('content')

<form action="{{route('brands.update', $brand->id)}}" method="post">
            @csrf
            @method('put')
            <div class="edit-header">
                    <h1>Edit {{$brand->id}} brand</h1>
            </div>
            <div class="edit-body-vertical" >
                <label>Name</label>
                <div class="input-group mb-3">
                    <input type="text" name="name" class="form-control" placeholder="Name" aria-label="Name" value="{{$brand->name}}">
                </div>
                <label>Image</label>
                <div class="input-group mb-3">
                    <input type="text" name="image" class="form-control" placeholder="Image" aria-label="Image" value="{{$brand->image}}">
                </div>
            </div>    
            <div class="edit-footer" class="text-center">
                <a href="{{route('brands')}}"><div style="width: 250px" class="close-btn" >Back</div></a>
                <div class="done-btn"><input type="submit" style="width: 250px" value="Done"/></div>
            </div>
</form>

@endsection