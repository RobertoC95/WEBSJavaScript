@extends('layouts.fe_master')

@section('content')
    
    <h1>Sou a tua HomePage</h1>
    <h5>Olá {{isset($myName)? $myName : 'Utilizador'}}!</h5>
    <img src="{{ asset('images/OIP.webp') }}" alt="">
    <ul>
        <li><a href="{{ route('hello_route_name') }}">Hello</a></li>
        <li><a href="{{ route('users.add') }}">Adicionar Utilizador</a></li>
        <li><a href="{{ route('users.all') }}">Todos os Utilizadores</a></li>
    </ul>
@endsection
