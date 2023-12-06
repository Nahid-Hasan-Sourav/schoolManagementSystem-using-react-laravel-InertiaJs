<?php

namespace App\Http\Controllers;

use App\Models\FeeCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeeCategoryController extends Controller
{
    public function index(){
        $feeCategory = FeeCategory::all();
        return Inertia::render('dashboard/FeeCategory/FeeCategory', [
            'feeCategory' => $feeCategory
        ]);
    }

    public function store(Request $request){
        $data = new FeeCategory();

        $data->name = $request->feeCategory;
        $data->save();

        return redirect()->route('view.fee.category')
        ->with('success', 'Request has been send successfully!!!');

    }


    public function update(Request $request,$id){
        $updatedData = FeeCategory::find($id);

        $updatedData->name = $request->feeCategory;
        $updatedData->save();

        return redirect()->route('view.fee.category')
        ->with('success', 'Request has been updated successfully!!!');
    }

    public function delete($id){
        $delete = FeeCategory::find($id);
        $delete->delete();

        return redirect()->route('view.fee.category')
        ->with('success', 'Request has been delete successfully!!!');
    }
}
