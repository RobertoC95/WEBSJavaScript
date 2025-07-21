@extends('layouts.fe_master')

@section('content')

    <h1>Sou a tua HomePage</h1>
    <h5>Olá, {{ isset($myName) ? $myName : 'Utilizador' }}</h5>
    <h5>Email: {{ $loginUser['email'] }}</h5>
    <h5>Telefone: {{ $loginUser['phone'] }}</h5>


    <h5>A informação do CESAE é:</h5>
    <h5>Nome: {{ $cesaeInfo['name'] }}</h5>
    <h5>Endereço: {{ $cesaeInfo['address'] }}</h5>
    <h5>Email: {{ $cesaeInfo['email'] }}</h5>


    <img src="{{ asset('images/OIP.webp') }}" alt="Image" style="width: 300px; height: 200px;">
    <ul>
        <li><a href="{{ route('hello_route_name') }}">Hello</a></li>
        <li><a href="{{ route('users.add') }}">Adicionar Utilizadores</a></li>
        <li><a href="{{ route('users.all') }}">Todos os Utilizadores</a></li>
    <li><a href="{{ route('tasks.all') }}">Lista de Tarefas</a></li>

    </ul>
@endsection
