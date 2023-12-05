<?php

use App\Http\Controllers\Backend\Setup\StudentClassController;
use App\Http\Controllers\StudentYearController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('dashboard/AdminDashboard', [
        // 'users' => "hghas ghasg"
    ]);
});

//student class start here
Route::get('/student-class-view',[StudentClassController::class,'index'])->name('view.student.class');
Route::post('/add-class',[StudentClassController::class,'store'])->name('add.student.class');
Route::put('/update-class/{id}',[StudentClassController::class,'update'])->name('update.student.class');
Route::delete('/delete-class/{id}',[StudentClassController::class,'delete'])->name('delete.student.class');
//student class end here

//student year start here
Route::get('/student-year-view',[StudentYearController::class,'index'])->name('view.student.year');
Route::post('/add-year',[StudentYearController::class,'store'])->name('add.student.year');
Route::put('/update-year/{id}',[StudentYearController::class,'update'])->name('update.student.year');
Route::delete('/delete-year/{id}',[StudentYearController::class,'delete'])->name('delete.student.year');

//student year start here
