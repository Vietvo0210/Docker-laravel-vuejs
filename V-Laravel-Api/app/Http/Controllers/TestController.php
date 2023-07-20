<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TestController
{
    public function retrieveDetail($id)
    {
        return Test::where('id', $id)->exists();
    }

    public function result($data)
    {
        return response()->json([
            'data' => $data,
            'message' => 'Success!'
        ], Response::HTTP_OK);
    }

    public function index()
    {
        try {
            $products = Test::all();
        } catch (Exception $e) {
            return response()->json([
                'data' => [],
                'message'=>$e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->result($products);
    }

    public function show($id)
    {
        try {
            $product = Test::find($id);
        } catch (Exception $e) {
            return response()->json([
                'data' => [],
                'message'=>$e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->result($product);
    }

    public function store(Request $request)
    {
        try {
            $product = Test::create($request->all());
        } catch (Exception $e) {
            return response()->json([
                'data' => [],
                'message'=>$e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->result($product);
    }

    public function update(Request $request, $id)
    {
        try {
            if($this->retrieveDetail($id)) {
                $product = Test::find($id);
                $product->name = is_null($request->name) ? $product->name : $request->name;
                $product->save();
            }
        }catch (Exception $e) {
            return response()->json([
                'data' => [],
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response()->json([
            'message' => 'Product updated'
        ], Response::HTTP_OK);
    }

    public function delete($id)
    {
        try {
            if($this->retrieveDetail($id)) {
                $product = Test::find($id);
                $product->delete();
            }
        } catch (Exception $e) {
            return response()->json([
                'data' => [],
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return $this->result('');
    }
}
