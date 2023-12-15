<?php

namespace App\Http\Controllers;

use App\Models\FeeCategory;
use App\Models\FeeCategoryAmount;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeeCategoryAmountController extends Controller
{
    public function index(){
        return Inertia::render('dashboard/FeeCategoryAmount/FeeCategoryAmount');
    }

    public function storeView(){
        $feeCategories = FeeCategory::all();
        $class = StudentClass::all();
        return Inertia::render('dashboard/FeeCategoryAmount/FeeCategoryAmountStore',[
            "feeCategories" => $feeCategories,
            "classess"      => $class
        ]);
    }

    public function store(Request $request){
        // dd($request->all());
        foreach($request->formattedData as $data){
            $feeCategoryAmountStore     = new FeeCategoryAmount();
            $feeCategoryAmountStore->fee_category_id      = $request->selectedFeeCategory;
            $feeCategoryAmountStore->class_id             = intval($data['classname']);
            $feeCategoryAmountStore->amount               = $data['amount'];

            $feeCategoryAmountStore->save();

        }
        return back()->with('success','Fee Category Amount Added Successfully');


    }
}
