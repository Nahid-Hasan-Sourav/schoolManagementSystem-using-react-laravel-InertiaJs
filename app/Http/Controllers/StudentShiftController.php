<?php

namespace App\Http\Controllers;

use App\Models\StudentShift;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentShiftController extends Controller
{
    public function index(){
        $allShift = StudentShift::all();
        return Inertia::render('dashboard/StudentShift/StudentShift', [
            'allShift' => $allShift
        ]);
    }

    public function store(Request $request){
        $data = new StudentShift();

        $data->name = $request->inputShiftValue;
        $data->save();

        return redirect()->route('view.student.shift')
        ->with('success', 'Request has been send successfully!!!');

    }


    public function update(Request $request,$id){
        $updatedData = StudentShift::find($id);
        
        $updatedData->name = $request->inputShiftValue;
        $updatedData->save();
        
        return redirect()->route('view.student.shift')
        ->with('success', 'Request has been updated successfully!!!');
    }

    public function delete($id){
        $delete = StudentShift::find($id);
        $delete->delete();

        return redirect()->route('view.student.shift')
        ->with('success', 'Request has been delete successfully!!!');
    }
}
