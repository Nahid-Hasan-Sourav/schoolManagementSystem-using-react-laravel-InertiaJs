<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentRegistrationController extends Controller
{
    
    public function registrationView(){
        // dd("dsjahfk");
       return Inertia::render('dashboard/StudentManagement/StudentRegistration');
    }
}
