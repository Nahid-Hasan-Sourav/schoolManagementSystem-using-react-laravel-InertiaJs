<?php

namespace App\Http\Controllers;

use App\Models\SchoolSubject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SchoolSubjectController extends Controller
{
    public function index(){
        $datas=SchoolSubject::all();
        return Inertia::render('dashboard/SchoolSubject/SchoolSubject',[
            'datas'=> $datas
        ]);
    }

    public function store(Request $request){

        $store = new SchoolSubject();
        $store->name = $request->inputSubjectType;
        $store->save();

        return redirect()->route('view.subject')->with('success','SUBJECT NAME ADDED');

    }

    public function update(Request $request,$id){
        $updateData = SchoolSubject::find($id);

        $updateData->name = $request->inputSubjectType;
        $updateData->save();

        return redirect()->route('view.subject')->with('success','SUBJECT NAME UPDATE');


    }

    public function delete($id){
        $delete = SchoolSubject::find($id);

        $delete->delete();
        return redirect()->route('view.subject')->with('success','SUBJECT NAME DELETE');

    }
}
