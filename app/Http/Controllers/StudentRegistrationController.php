<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentRegistrationController extends Controller
{
    
    public function index(){
        // dd("dsjahfk");
       return Inertia::render('dashboard/StudentManagement/StudentRegistration');
    }
    public function registrationCreate(){
        // dd("dsjahfk");
       return Inertia::render('dashboard/StudentManagement/StudentRegistrationCreate');
    }
}
