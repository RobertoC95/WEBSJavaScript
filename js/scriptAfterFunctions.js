function helloClass(){
    alert('Olá turma de software developer');
}

function helloPerson(){
    alert('olá Roberto');
}


//função com argumentos, fica abstracta e reutilizavel
function hello(greetScope){
    alert('olá ' + greetScope);
}

//pag 69

function rant(message){
    for(let i=0; i<3; i++){
        console.log(i + ' ' + message.toUpperCase());
    }
}

function whatDoYouHate(){
    let hate = prompt('O que é que odeias?');
    rant(hate);
}

//pag72

function snakeEyes(num1, num2){

    if((num1 == 1) && (num1 == num2)){   //dois iguias valor, 3 iguais valor e tipo
        console.log('Yay, Ekans');
    }else{
        console.log('ArrrboK');
    }
}