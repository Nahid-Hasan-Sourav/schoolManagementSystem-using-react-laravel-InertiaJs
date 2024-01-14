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
        $datas = FeeCategoryAmount::with([
            'FeeCategory' => function ($query) {
                $query->select('id', 'name'); // Specify the columns you want from the FeeCategory model
            },
            'StudentClass'=>function($query){
                $query->select('id','name');
            },
        ])->get();

        return Inertia::render('dashboard/FeeCategoryAmount/FeeCategoryAmount',[
            "datas"=>$datas
        ]);
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
        return redirect()->route('view.fee.category.amoount')->with('success','Fee Category Amount Added Successfully');


    }

    public function edit($id){
        $data          = FeeCategoryAmount::find($id);
        $feeCategories = FeeCategory::all();
        $class         = StudentClass::all();
        return Inertia::render('dashboard/FeeCategoryAmount/FeeCategoryAmountEdit',[
            "feeCategories" => $feeCategories,
            "classess"      => $class,
            "data"          => $data
        ]);

    }

    public function update(Request $request){
        $updateData = FeeCategoryAmount::find($request->id);
    

        $updateData->fee_category_id  = $request->feeCategory;
        $updateData->class_id         = $request->classId;
        $updateData->amount           = $request->new_amount ? $request->new_amount : $request->fixed_amount;

        $updateData->save();

        return redirect()->route('view.fee.category.amoount')->with('success','Data Update Successfully');
    }

    public function delete($id){
        $delete = FeeCategoryAmount::find($id);

        $delete->delete();

        return redirect()->route('view.fee.category.amoount')
        ->with('success', 'Request has been delete successfully!!!');
    }
}
