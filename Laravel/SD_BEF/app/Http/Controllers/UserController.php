<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $users = $this->getUsers();

        //ir de forma real à base de dados
        $usersFromDB = $this->getUsersFromDB();

        return view('users.all_users', compact('users', 'usersFromDB'));

    }

    public function testSQLqueries() {

        //query de insert. no futuro, os dados a inserir vêm do formulário (request)
        // DB:table('users')
            // ->insert([
            //     'name' => 'Roberto',
            //     'email' => 'roberto@gmail.com',
            //     'password' => '1234',
            // ]);


        //query de update. no futuro, os dados a inserir vêm do formulário (request)
        // DB::table('users')
        // -> where('id',4)
        // ->update([
        //     'name' => 'Rita',
        //     'address' => 'Rua da Rita',
        //     'updated_at' => now()
        // ]);

        //update or insert
        // DB::table('users')->updateOrInsert([
        //     'email'=>'roberto@gmail.com',
        // ],
        // [
        //     'name'=> 'Quim',
        //     'password'=>'1234',
        //     'updated_at'=> now(),
        // ]);


        //apagar o user com id 3
        // DB::table('users')
        // ->where('id',3)
        // ->delete();

        return response()->json('query ok!');
    }
    private function getUsers()
    {

       //simula ir à base de dados carregar todos os users
        $users = [
            ['id' => 1, 'name'=> 'Rita', 'phone'=> '915555555'],
            ['id' => 2, 'name'=> 'Rui', 'phone'=> '915555555'],
            ['id' => 3, 'name'=> 'Patrícia', 'phone'=> '915555555'],
        ];

        return $users;
    }

    private function getUsersFromDB()
    {
        //query real que vai à base de dados buscar todos os users

        $users = DB::table('users')->get();
        dd($users);

        return $users;
    }

}
