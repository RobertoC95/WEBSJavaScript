<?php
    $helloWorld = 'Aqui vamos trabalhar com o servidor!';
    $helloWorld = 'Aqui vamos trabalhar com o servidor e ligar a web à Base de Dados!';

    // ex criar uma var
    $name = 'Roberto';


    //definir uma função em php
    function plus($x,$y){
        return $x +$y;
    }

    //ex pdf

    function boasVindas($name, $surname){
        return $name." ".$surname;  
    }

    //declarar um array
    //vida real: vai à BD e select users.name from users;
    $students = ['Rui', 'Eliane', 'Pedro'];
    //var_dump($students);

    $modules = [
        'OOP' => 'Vitor',
        'Design Patterns' => 'Vitor',
        'WEB' => 'Laís',
        'Sql' => 'Alexandre',
        'Programação Servidor' => 'Sara'
    ];

    //var_dump($modules);

    //ir oa ficheiro JSON e buscar dados
    $cesaeData = file_get_contents('./data/courses.json');
    $cesaeData = json_decode($cesaeData, true);
    //futuro: consulta à BD

    //var_dump($cesaeData['data']);