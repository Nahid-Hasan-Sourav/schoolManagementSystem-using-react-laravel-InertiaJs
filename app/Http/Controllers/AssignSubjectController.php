<?php

namespace App\Http\Controllers;

use App\Models\AssignSubject;
use App\Models\SchoolSubject;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignSubjectController extends Controller
{
    //
    public function index(){
        $datas = AssignSubject::with(['class','subject'])->get();
        return Inertia::render('dashboard/AssignSubject/AssignSubject',[
            'datas'=>$datas
        ]);
    }

    public function storeView(){
        $allClass = StudentClass::all();
        $allSubject = SchoolSubject::all();
        return Inertia::render('dashboard/AssignSubject/AssignSubjectStore',[
        "allClass"=>$allClass,
        "allSubject"=>$allSubject
        ]);
    }

    public function store(Request $request){


        foreach($request->formattedData as $data){
            $assignSubject = new AssignSubject();
            $assignSubject->class_id        =$request->selectedClass;
            $assignSubject->subject_id 	    =$data['subject'];
            $assignSubject->full_mark       =$data['fullMark'];
            $assignSubject->pass_mark       =$data['passMark'];
            $assignSubject->subjective_mark =$data['subjectiveMark'];

            $assignSubject->save();
        };

        return redirect()->route('view.assignsubject')->with('success','subject assign successfully');

    }

    public function assignSubjectDetails($id){
        $details = AssignSubject::with([
            'class' => function ($q) {
                $q->select('id','name');
            },
            'subject'=>function($q){
                $q->select('id','name');
            },
        ])->where('class_id', $id)->get();
        
        
        return Inertia::render('dashboard/AssignSubject/AssignSubjectDetails',[
            'details'=>$details
        ]);
    }

    public function assignSubjectEdit($id){
        $allClass = StudentClass::all();
        $allSubject = SchoolSubject::all();
        $data       = AssignSubject::find($id);
        return Inertia::render('dashboard/AssignSubject/AssignSubjectEdit',[
        "allClass"    =>$allClass,
        "allSubject"  =>$allSubject,
        "data"        =>$data ,
        ]);
    }
}
