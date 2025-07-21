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

        $cesaeInfo = [
            'name' => 'CESAE',
            'address' => 'Rua Ciríaco Cardoso 186, 4150-212 Porto',
            'email' => 'cesae@cesae.pt'

        ];
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
        return 'Roberto';
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
