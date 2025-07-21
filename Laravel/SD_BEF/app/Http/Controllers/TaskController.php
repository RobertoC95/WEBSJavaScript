<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function allTasks()
    {
        $tasks = [
            ['name' => 'Rita', 'task' => 'Estudar Laravel'],
            ['name' => 'Igor', 'task' => 'Estudar SQL'],
        ];

        return view('tasks.tasks', compact('tasks'));
    }
}
 