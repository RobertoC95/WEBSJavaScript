<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function helloUsers() {
        return view('users.hello', compact('myName'));
    }

    public function addUsers() {
        return view('users.add_user');
    }

    public function allUsers() {
        //simula ir à base de dados carregar todos os users
        $users = ['Roberto','Francisco','Simão','Alexandra'];


        return view('users.all_users', compact('users'));
    }

    private function getUser(){
        //query à base de dados para buscar o user
        $myName = 'Roberto';

        return $myName;
    }
}
