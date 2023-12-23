<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/ExamType/ExamType',[
            "datas"=>"jsfdnsdfh"
        ]);
    }


    public function store(Request $request){
        dd($request->all());
    }
}
