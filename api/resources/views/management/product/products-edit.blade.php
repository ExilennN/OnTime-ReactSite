@extends('welcome')
@section('content')

<form action="{{route('products.update', $product->id)}}" method="post">
            @csrf
            @method('put')
            <div class="edit-header">
                    <h1>Edit {{$product->id}} Product</h1>
            </div>
            <div class="edit-body" >
                
                    <div>
                        <label>Name</label>
                        <div class="input-group mb-3">
                            <input type="text" name="name" class="form-control" placeholder="Name" aria-label="Name" value="{{$product->name}}">
                        </div>
                        <label>Brand</label>
                        <div class="input-group mb-3">
                            <select name="brand_id" class="form-select">
                                @foreach($brands as $brand)
                                    <option {{$product->brand_id == $brand->id ? 'selected' : ''}} value="{{$brand->id}}">{{$brand->name}}</option>
                                @endforeach
                            </select>
                        </div>
                        <label>Price</label>
                        <div class="input-group mb-3">
                            <input type="number" name="price" class="form-control" placeholder="Price" aria-label="Price" value="{{$product->price}}">
                        </div>
                        <label>Status</label>
                        <div class="input-group mb-3">
                            <input type="text" name="status" class="form-control" placeholder="Status" aria-label="Status" value="{{$product->status}}"/>
                        </div>
                        <label>Color Case</label>
                        <div class="input-group mb-3">
                            <input type="text" name="color_case" class="form-control" placeholder="Color Case" aria-label="Color Case" value="{{$product->color_case}}">
                        </div>
                        <label>Color Dial</label>
                        <div class="input-group mb-3">
                            <input type="text" name="color_dial" class="form-control" placeholder="Color Dial" aria-label="Color Dial" value="{{$product->color_dial}}">
                        </div>
                    </div>
                    <div>
                        <label>Color Strap</label>
                        <div class="input-group mb-3">
                            <input type="text" name="color_strap" class="form-control" placeholder="Color Strap" aria-label="Color Strap" value="{{$product->color_strap}}">
                        </div>
                        <label>Diameter</label>
                        <div class="input-group mb-3">
                            <input type="text" name="diameter" class="form-control" placeholder="Diameter" aria-label="Diameter" value="{{$product->diameter}}">
                        </div>
                        <label>Material Strap</label>
                        <div class="input-group mb-3">
                            <input type="text" name="material_strap" class="form-control" placeholder="Material Strap" aria-label="Material Strap" value="{{$product->material_strap}}">
                        </div>
                        <label>Material Case</label>
                        <div class="input-group mb-3">
                            <input type="text" name="material_case" class="form-control" placeholder="Material Case" aria-label="Material Case" value="{{$product->material_case}}">
                        </div>
                        <label>Movement</label>
                        <div class="input-group mb-3">
                            <input type="text" name="movement" class="form-control" placeholder="Movement" aria-label="Movement" value="{{$product->movement}}">
                        </div>
                        <label>Preview Image</label>
                        <div class="input-group mb-3">
                            <input type="text" name="preview_image" class="form-control" placeholder="Preview Image" aria-label="Preview Image" value="{{$product->preview_image}}">
                        </div>
                    </div>
                </div>
            <div class="edit-footer" class="text-center">
                <a href="{{route('products')}}"><div style="width: 250px" class="close-btn" >Back</div></a>
                <div class="done-btn"><input type="submit" style="width: 250px" value="Done"/></div>
            </div>
</form>

@endsection