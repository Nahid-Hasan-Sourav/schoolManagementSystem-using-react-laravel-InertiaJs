<?php

namespace App\Http\Controllers;

use App\Models\StudentGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentGroupController extends Controller
{
    public function index(){
        $allGroup = StudentGroup::all();
        return Inertia::render('dashboard/StudentGroup/StudentGroup', [
            'allGroup' =>$allGroup
        ]);
    }

    public function store(Request $request){
        $data = new StudentGroup();

        $data->name = $request->inputGroupValue;
        $data->save();

        return redirect()->route('view.student.group')
        ->with('success', 'Request has been send successfully!!!');

    }


    public function update(Request $request,$id){
        $updatedData = StudentGroup::find($id);
        
        $updatedData->name = $request->inputGroupValue;
        $updatedData->save();
        
        return redirect()->route('view.student.group')
        ->with('success', 'Request has been updated successfully!!!');
    }

    public function delete($id){
        $delete = StudentGroup::find($id);
        $delete->delete();

        return redirect()->route('view.student.group')
        ->with('success', 'Request has been delete successfully!!!');
    }
}
