<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UtilController;
use App\Http\Controllers\UserController;

Route::get('/', [UtilController::class, 'welcome']) ;

Route::get('/home', [UtilController::class, 'index'])->name('home_route_name');

Route::get('/hello', [UserController::class, 'helloUsers'])->name('hello_route_name');

Route::get('/curso/{nomeCurso}', function($nomeCurso){
    return '<h1>Curso da Cesae: '.$nomeCurso.'</h1>';
});

Route::get('/modules/{id}', function($id){
    return '<h1>Este é o módulo de: '.$id. '</h1>';
});

Route::get('/addUser', [UserController::class, 'addUsers'])->name('users.add');

Route::get('/allUsers', [UserController::class, 'allUsers'])->name('users.all');

Route::get('/tasks', [TaskController::class, 'allTasks'])-> name ('tasks.all');

Route::get('/test-queries', [UserController::class, 'testSqlQueries'])->name('test.sql');

Route::fallback(function(){
return '<h1>What you lookin at?</h1>'."<a href=".route('hello_route_name').">You Lost?</a>";
})->name('fallback_route_name');
