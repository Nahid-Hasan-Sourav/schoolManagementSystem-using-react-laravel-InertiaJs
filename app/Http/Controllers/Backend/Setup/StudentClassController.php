<?php

namespace App\Http\Controllers\Backend\Setup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StudentClassController extends Controller
{
    public function index(){
        return Inertia::render('dashboard/StudentClass/StudentClass', [
            'users' => "hghas ghasg"
        ]);
    }

    public function store(Request $request){
        $data = $request->all();

        // return inertia()->render('dashboard/StudentClass/StudentClass', [
        //     'message' => 'Class added successfully',
        //     'data' => [
        //         'className' =>  $data,
        //     ],
        // ]);
        // return Inertia()->visit('dashboard/StudentClass/StudentClass', [
        //     'message' => 'Class added successfully',
        //     'data' => [
        //         'className' =>  $data,
        //     ],
        // ]);
        // return Redirect::back()->with('success', 'Contact updated.');
        // return inertia()->visit('dashboard/StudentClass/StudentClass', [
        //     'message' => 'Class added successfully',
        //     'data' => [
        //         'className' => $data,
        //         'status' => 'success', // include your custom data here
        //     ],
        // ]);
        return back()->with([
            'data' => $data,
            'status' => 'success',
        ]);
        
    }
}
