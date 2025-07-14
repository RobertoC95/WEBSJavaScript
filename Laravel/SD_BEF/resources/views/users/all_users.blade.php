@extends('layouts.fe_master')

@section('content')
    <h1>Lista de Utilizadores</h1>

    <ul>
        @foreach ($users as $user)
        <li>{{$user}}</li>

        @endforeach
    </ul>

    <ul>
        <li><a href="{{ route('home_route_name') }}">Voltar</a></li>
    </ul>
@endsection
