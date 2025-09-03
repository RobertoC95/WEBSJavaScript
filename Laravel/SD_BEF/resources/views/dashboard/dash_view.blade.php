@extends('layouts.fe_master')

@section('content')

    @auth
        <h5>Olá {{Auth::user()->name}}</h5>

        @if(Auth::user()->user_type =='1')
            <div class="alert alert-success" role="alert">
                Conta de administrador!
            </div>
        @endif
    @endauth
@endsection
