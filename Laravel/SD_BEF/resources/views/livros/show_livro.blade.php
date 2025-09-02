@extends('layouts.fe_master')

@section('content')
    <h3>Editar Livro {{ $livros->name }}</h3>

    <form method="POST" action="{{ route('livros.update') }}">
        @csrf
        @method('PUT')
        <input type="hidden" name='id' value="{{ $livros->id }}">

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome</label>
            <input required name="name" type="text" readonly class="form-control" value="{{ $livros->name}}" id="name" aria-describedby="emailHelp"
                value="{{ $livros->name }}">
            @error('name')
                Nome inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Estimated price</label>
            <input required name="estimated_price" type="text" readonly class="form-control" id="estimated_price"
                aria-describedby="emailHelp" value="{{ $livros->estimated_price}}">
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Paid price</label>
            <input required name="paid_price" type="number" class="form-control" id="paid_price"
                aria-describedby="emailHelp" value="{{ $livros->paid_price}}">
        </div>

        <div class="mb-3">
            <select name="user_id" id="">
                @foreach ($users as $user)
                    {
                    <option value="{{ $user->id }}"

                         @if ($livros->user_id == $user->id) selected @endif>
                        {{ $user->name }}</option>
                    }
                @endforeach
            </select>
        </div>

                <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
@endsection
