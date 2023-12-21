<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comments;
use App\Models\Products;
class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comments = Comments::all();
        return response()->json($comments, 200);
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
        $comment = new Comments;
        if (!is_null($request)){
            $comment->user = $request->user ? $request->user : "";
            $comment->text = $request->text ? $request->text : "";
            if (!Products::where('id', $request->product_id)->exists()) { return response()->json(["error"=> "Comment CREATION ERROR: Product not found"], 404); }
            $comment->product_id = $request->product_id;

            $comment->save();
            return response()->json(["success"=> "Comment created"], 200);
        }
        else{
            return response()->json(["error"=> "Comment not created"], 404);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $comment = Comments::find($id);
        if (!empty($comment)) {
            return response()->json($comment, 200);
        }
        else{
            return response()->json(['error' => "Comment not found"], 404);
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
        $comment = Comments::find($id);
        if (!empty($comment)) {
            $comment->user = $request->user ? $request->user : $comment->user;
            $comment->text = $request->text ? $request->text : $comment->text;
            if (Products::where('id', $request->product_id)->exists()) { $comment->product_id = $request->product_id; }
        
            $comment->save();
            return response()->json(['success' => "Comment updated"], 200);
        }
        else{
            return response()->json(['error' => "Comment not found"], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Comments::where('id', $id)->exists()){
            $comment = Comments::find($id);
            $comment->delete();
            return response()->json(['success' => "Comment deleted"], 202);
           }
           else{
            return response()->json(['error' => "Comment not found"], 404);
           }
    }
}
