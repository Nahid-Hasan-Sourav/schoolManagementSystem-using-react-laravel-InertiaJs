<?php

namespace App\Http\Controllers;

use App\Models\ExamType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamTypeController extends Controller
{
    public function index()
    {
        $datas = ExamType::all();
        return Inertia::render('dashboard/ExamType/ExamType',[
            "datas"=>  $datas
        ]);
    }


    public function storeData(Request $request){
        $data = $request->all();

        $store = new ExamType();
        // $store->name = $data['inputExamType'];
        $store->name = $request->inputExamType;

        $store->save();

        return redirect()->route('view.examtype')->with('success','Exam type added successfully');
    }

    public function update(Request $request,$id){
        $findData = ExamType::find($id);
        $findData->name = $request->inputExamType;
        $findData->save();
        return redirect()->route('view.examtype')->with('success','Exam type update successfully');

    }

    public function delete($id){

        $delete = ExamType::find($id);
        $delete->delete();
        return redirect()->route('view.examtype')->with('success','Exam type delete successfully');

    }
}
