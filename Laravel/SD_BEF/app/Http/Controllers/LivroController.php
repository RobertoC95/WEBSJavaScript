<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    //

    public function createLivro(){
        $users= User::get();
        return view('livros.add_livro', compact('users'));
    }

    public function allLivros(){

        $livros = $this->getAllLivros();
        return view('livros.all_livros', compact('livros'));
    }

    private function getAllLivros(){

        $livros = Livro::join('users', 'users.id', '=', 'livros.user_id')
        ->select('livros.*', 'users.name as username')
        ->get();

        return $livros;
    }

    public function viewLivro($id){

        $users= User::get();
        /*return view('livros.add_livro', compact('users'));*/
        $livros = Livro::join('users', 'users.id', '=', 'livros.user_id')
        ->where('livros.id', $id)
        ->select('livros.*', 'users.name as username')

            ->first();

        return view('livros.show_livro', compact('livros', 'users'));

    }


    public function updateLivro(Request $request){
        $request->validate([
            'name' =>'required',
            'paid_price' => 'required'
        ]);

        Livro::where('id', $request->id)
        ->update([
            'name' =>$request->name,
            'estimated_price' =>$request->estimated_price,
            'paid_price' =>$request->paid_price,
            'user_id' =>$request->user_id,
            'updated_at' => now()
        ]);

        return redirect()->route('livros.all')->with('message', 'Tarefa actualizada com sucesso!');

    }

    public function deleteLivro($id){
        Db::table('livros')->where('id', $id)->delete();

        return back();
    }

    public function storeLivro(Request $request){


     $request->validate([
        'name' => 'string|max:50|required',
        'user_id' => 'required',
        'estimated_price' => 'required|decimal:2'
    ]);

        Livro::insert([
            'name' => $request->name,
            'estimated_price' => $request->estimated_price,
            'user_id'=>$request->user_id,
        ]);

        return redirect()->route('livros.all')->with('message','Livro adicionado com sucesso');

    }





}
