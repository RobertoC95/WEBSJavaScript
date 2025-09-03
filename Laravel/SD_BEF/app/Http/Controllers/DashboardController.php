<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //function that returns a view

    public function dashview(){
        return view('dashboard.dash_view');
    }

}
