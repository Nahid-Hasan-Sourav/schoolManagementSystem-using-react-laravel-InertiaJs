<?php

namespace App\Http\Controllers\Backend\Setup;

use App\Http\Controllers\Controller;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StudentClassController extends Controller
{
    public function index(){
        $allClassName =StudentClass::all();
        
        return Inertia::render('dashboard/StudentClass/StudentClass', [
            'allClassName' => $allClassName
        ]);
    }

    public function store(Request $request){
        // $data = $request->all();
        // dd($request->all());

        $className = new StudentClass();
        $className->name = $request->className;
        $className->save();

        return redirect()->route('view.student.class')
        ->with('success', 'Request has been send successfully!!!');

        // return view('',compact('data'));

        // return Inertia::render('dashboard/StudentClass/StudentClass', [
        //     'data' => $data,
        // ]);

    }

    public function update(Request $request,$id){
        $data =$request->all();
        // dd($data['className']);
        $exitData = StudentClass::find($id);

        

        $exitData->name = $data['className'];
        $exitData->save();

        return redirect()->route('view.student.class')
        ->with('success', 'Data Update Successfully !!!');

    }

}
