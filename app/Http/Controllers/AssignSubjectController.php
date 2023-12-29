<?php

namespace App\Http\Controllers;

use App\Models\AssignSubject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignSubjectController extends Controller
{
    //
    public function index(){
        $dadas = AssignSubject::all();
        return Inertia::render('dashboard/AssignSubject/AssignSubject',[
            'dadas'=>$dadas
        ]);
    }
}
