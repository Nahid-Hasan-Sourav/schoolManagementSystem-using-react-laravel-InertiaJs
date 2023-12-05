<?php

namespace App\Http\Controllers;

use App\Models\StudentYear;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentYearController extends Controller
{
    public function index(){
        $allYear = StudentYear::all();
        return Inertia::render('dashboard/StudentYear/StudentYear', [
            'allYear' =>$allYear
        ]);
    }

    public function store(Request $request){
        // dd($request->all());
        $studentYear = new StudentYear();
        $studentYear->name =$request->inputYearValue;
        $studentYear->save();

        return redirect()->route('view.student.year')
        ->with('success', 'Request has been send successfully!!!');
    }

    public function update(Request $request,$id){
        // $data =$request->all();
        // dd($data['inputYearValue']);
        // die();
        $upadteData = StudentYear::find($id);
        
        $upadteData->name = $request->inputYearValue;
        $upadteData->save();

        // return redirect()->route('view.student.year')
        // ->with('success', 'Request has been update successfully!!!');
    }

    public function delete($id){

        $deleteData = StudentYear::find($id);
        $deleteData->delete();

        return redirect()->route('view.student.year')
        ->with('success', 'Request has been delete successfully!!!');

    }
}
