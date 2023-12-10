<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FeeCategoryAmountController extends Controller
{
    public function index(){
        return Inertia::render('dashboard/FeeCategoryAmount/FeeCategoryAmount');
    }
}
