<?php
        include('./controllers/phpCode.php');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/script.js" defer></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Olá servidor</h1>

    <h4><?=$helloWorld?></h4>
    <h5>Olá <?=$name?>!</h5>
    <h2>Olá <?= $name ? $name : 'Utilizador' ?></h2>

    <?php
        echo plus(6,8);
    ?>

    <p><?= plus(8, 6) ?></p>
    <p>Olá <?= boasVindas('Roberto', 'Couto')?>!</p>

    <p> Olá <?= $students[0] ?>!</p>

    <?php
    foreach($students as $item){
        echo $item .'</br>';
    }
    ?>

    <hr>
    <ul>
        <?php
        foreach($modules as $key=>$value){
            echo "<li> O módulo de $key é dado por $value </li>";
        }
        ?>
    </ul>

    <hr>
    <ul>
        <?php
        foreach($cesaeData['data'] as $data){
            echo "<li>".$data['course']."e o ano é ".$data['year']. "!</li>";
        }
        ?>
    </ul>


</body>
</html>