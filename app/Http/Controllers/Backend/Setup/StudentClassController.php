<?php

namespace App\Http\Controllers\Backend\Setup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentClassController extends Controller
{
    public function index(){
        return Inertia::render('dashboard/StudentClass/StudentClass', [
            'users' => "hghas ghasg"
        ]);
    }
}
