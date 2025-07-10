<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('welcome');
});

Route::get('/hello', function (){
    return '<h1>Olá Mundo</h1>';
});

Route::get('/curso', function(){
    return '<h1>Olá curso Software Developer!</h1>';
});