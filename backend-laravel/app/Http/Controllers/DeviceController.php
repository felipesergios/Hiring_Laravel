<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Illuminate\Http\Request;
use App\Models\Device;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Device::all();
        return($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'product_name' => 'required|max:255',
            'product_description' => 'required',
            'product_image_link' => 'required',
            'product_brand'=> [
                'required',
            Rule::in(['brastemp', 'eletrolux','fischer','samsung','lg'])
            ],
        ];
        $validator = Validator::make($request->all(), $rules);
        
        if($validator->fails()){
            return($validator->messages());
        }else{
        $data = $request->all();
        $new_device = Device::create($data);
        return($new_device);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Device::FindOrFail($id);
        return($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $device = Device::FindOrFail($id);
        $device->update($request->all());
        return $device;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Device::destroy($id);
        
    }
}
