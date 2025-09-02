<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UtilController extends Controller
{
    public function index() {
        $myName = $this->getUser();


        $loginUser = [
            'name' => $myName,
            'email' => 'francisco@gmail.com',
            'phone' => '966666666',
        ];

        $cesaeInfo = $this->getCesaeInfo();
        return view('utils.homepage', compact('myName','loginUser','cesaeInfo'));
    }

     public function sayHello(){
        $myName = $this->getUser();
        return view('users.hello', compact('myName'));
    }

    public function welcome()
    {
        return view('welcome');
    }

    private function getUser()
    {
        $myName = 'Roberto';
        return $myName;
    }

     private function getCesaeInfo(){

        //simula dinamicamente ir à base de dados
        return $cesaeInfo = [
            'name' => 'Cesae',
            'address' => 'RUa do Cesae'
        ];
    }

    // public function welcome() {
    //     $myName = $this->getUser();
    //     return view('user.hello', compact('myName'));
    // }

    // private function getUser(){
    //     //query à base de dados para buscar o usar
    //     $myName = 'Roberto';

    //     return $myName;
    // }

}
