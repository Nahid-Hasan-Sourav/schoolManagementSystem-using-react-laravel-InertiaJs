<?php

use App\Http\Controllers\Backend\Setup\StudentClassController;
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

Route::get('/add-class-view',[StudentClassController::class,'index'])->name('view.student.class');
Route::post('/add-class',[StudentClassController::class,'store'])->name('add.student.class');
Route::put('/update-class/{id}',[StudentClassController::class,'update'])->name('update.student.class');
Route::delete('/delete-class/{id}',[StudentClassController::class,'delete'])->name('delete.student.class');


