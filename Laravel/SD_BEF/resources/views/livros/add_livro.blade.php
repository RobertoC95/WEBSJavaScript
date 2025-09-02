@extends('layouts.fe_master')

@section('content')
    <h6>Olá aqui podes adicionar Livros</h6>
    <form method="POST" action="{{ route('livros.store') }}">
        @csrf

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome</label>
            <input required name="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
            @error('name')
                Nome inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Estimated Price</label>
            <input required name="estimated_price" type="text" class="form-control" id="estimated_price"
                aria-describedby="emailHelp">
            @error('description')
                Descrição inválida
            @enderror
        </div>


        <select name="user_id" id="">
            <option value=""></option>

            @foreach ($users as $user)
                <option value="{{ $user->id }}">{{ $user->name }}</option>
            @endforeach

        </select>


        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
