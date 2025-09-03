@extends('layouts.fe_master')
@section('content')

    @if (session('message'))
        <div class="alert alert-success">
            {{ session('message') }}
        </div>
    @endif

    <h4>Aqui terás todos os teus livros</h4>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Estimated Price</th>
                <th scope="col">Paid Price</th>
                <th scope="col">Diference</th>
                <th scope="col">Nome Responsável</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($livros as $livro)

                <tr>
                    <th scope="row">{{ $livro->id }}</th>
                    <td>{{ $livro->name }}</td>
                    <td>{{ $livro->estimated_price }}</td>
                    <td>{{ $livro->paid_price }}</td>
                    <td>{{ $livro->paid_price ? $livro->paid_price - $livro->estimated_price : 'não definido' }}  </td>
                    <td>{{ $livro->username }}</td>
                    <td><a href="{{ route('livros.show', $livro->id) }}" class="btn btn-info me-2">Ver/Editar</a>
                        <a href="{{ route('livros.delete', $livro->id) }}" class="btn btn-danger">Apagar</a></td>

                </tr>
                    <a href="{{ route('livros.add', $livros->id) }}" class="btn btn-info me-2">adicionar</a>
            @endforeach


        </tbody>
    </table>
@endsection
