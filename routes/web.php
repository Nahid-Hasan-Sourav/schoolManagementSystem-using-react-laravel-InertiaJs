<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssignSubjectController;
use App\Http\Controllers\Backend\Setup\StudentClassController;
use App\Http\Controllers\ExamTypeController;
use App\Http\Controllers\FeeCategoryAmountController;
use App\Http\Controllers\FeeCategoryController;
use App\Http\Controllers\SchoolSubjectController;
use App\Http\Controllers\StudentGroupController;
use App\Http\Controllers\StudentRegistrationController;
use App\Http\Controllers\StudentShiftController;
use App\Http\Controllers\StudentYearController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/admin-dashboard', function () {
    return Inertia::render('dashboard/AdminDashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/dashboard', function () {
    // return Inertia::render('dashboard/AdminDashboard', [
    //     // 'users' => "hghas ghasg"
    // ]);
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

//student group start here
Route::get('/group-view',[StudentGroupController::class,'index'])->name('view.student.group');
Route::post('/add-group',[StudentGroupController::class,'store'])->name('add.student.group');
Route::put('/update-group/{id}',[StudentGroupController::class,'update'])->name('update.student.group');
Route::delete('/delete-group/{id}',[StudentGroupController::class,'delete'])->name('delete.student.group');
//student group end here

//student shift start here
Route::get('/shift-view',[StudentShiftController::class,'index'])->name('view.student.shift');
Route::post('/add-shift',[StudentShiftController::class,'store'])->name('add.student.shift');
Route::put('/update-shift/{id}',[StudentShiftController::class,'update'])->name('update.student.shift');
Route::delete('/delete-shift/{id}',[StudentShiftController::class,'delete'])->name('delete.student.shift');
//student shift end here

//student fee category start here
Route::get('/fee-category-view',[FeeCategoryController::class,'index'])->name('view.fee.category');
Route::post('/add-fee-category',[FeeCategoryController::class,'store'])->name('add.fee.category');
Route::put('/update-fee-category/{id}',[FeeCategoryController::class,'update'])->name('update.fee.category');
Route::delete('/delete-fee-category/{id}',[FeeCategoryController::class,'delete'])->name('delete.fee.category');
//student fee category end here

//student fee category amount start here
Route::get('/fee-category-amount-view',[FeeCategoryAmountController::class,'index'])->name('view.fee.category.amoount');
Route::get('/add-fee-category-view',[FeeCategoryAmountController::class,'storeView'])->name('add.fee.category.amoount');
Route::post('/add-fee-category-view',[FeeCategoryAmountController::class,'store'])->name('post.fee.category.amoount');
Route::get('/edit-fee-category/{id}',[FeeCategoryAmountController::class,'edit'])->name('edit.fee.category.amoount');
Route::post('/update-fee-category-amount',[FeeCategoryAmountController::class,'update'])->name('update.fee.category.amoount');
Route::delete('/delete-fee-category/amount/{id}',[FeeCategoryAmountController::class,'delete'])->name('delete.fee.category.amoount');
//student fee category amount end here


//student exam type amount start here
Route::get('/exam-type-view',[ExamTypeController::class,'index'])->name('view.examtype');
Route::post('examType',[ExamTypeController::class,'storeData'])->name('examtype.add');
Route::put('/update-exam-type/{id}',[ExamTypeController::class,'update'])->name('update.examtype');
Route::delete('/delete-exam-type/{id}',[ExamTypeController::class,'delete'])->name('delete.examtype');
//student exam type amount end here

//school subject start here
Route::get('/school-subject-view',[SchoolSubjectController::class,'index'])->name('view.subject');
Route::post('/add-subject',[SchoolSubjectController::class,'store'])->name('add.subject');
Route::put('/update-subject/{id}',[SchoolSubjectController::class,'update'])->name('update.subject');
Route::delete('/delete-subject/{id}',[SchoolSubjectController::class,'delete'])->name('delete.subject');
//school subject end here

//school assign subject start here
Route::get('/assign-subect-view',[AssignSubjectController::class,'index'])->name('view.assignsubject');
Route::get('/assign-subect-store-view',[AssignSubjectController::class,'storeView'])->name('view.store.assignsubject');
Route::post('/add-assign-subect',[AssignSubjectController::class,'store'])->name('add.assignsubject');
Route::get('/assign/subject/details/{id}',[AssignSubjectController::class,'assignSubjectDetails'])->name('details.assignsubject');
Route::get('/assign/subject/edit/{id}',[AssignSubjectController::class,'assignSubjectEdit'])->name('details.assignsubject');
Route::post('/update-assign-subect',[AssignSubjectController::class,'assignSubjectUpdate'])->name('update.assignsubject');
Route::delete('/delete-assign-subect/{id}',[AssignSubjectController::class,'delete'])->name('delete.assignsubject');
//school assign subject end here

//student management start here
Route::prefix('student')->group(function () {
    Route::get('/registration',[StudentRegistrationController::class,'index'])->name('view.student.registration');
    Route::get('/registration/create',[StudentRegistrationController::class,'registrationCreate'])->name('create.student.registration');
});
//student management end here

require __DIR__.'/auth.php';
