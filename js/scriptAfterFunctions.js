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

//pag 78

// const sum= function(x,y){
//     let total = x + y

//     return total;
// }

const sum = (w,y) =>{
    return x + y
}

// pag 86

const fullNames = [
    {first: 'Albus', last: 'Dumbeldore'},
    {first: 'Harry', last: 'Potter'},
    {first: 'Hermione', last: 'Granger'},
    {first: 'Ron', last: 'Weasley'},
    {first: 'Rubeus', last: 'Hagrid'},
    {first: 'Minerva', last: 'McGonagall'},
    {first: 'Severus', last: 'Snape'}
]
/*
const first = fullNames.map(function(name) {
    return name.first;

})
console.log(first);*/

// fullNames.forEach(function(name) {
//     console.log(`O meu nome é ${name.last}, ${name.first} ${name.last}`)

// })

// fullNames.forEach(function(name) {
//     console.log(item.first+ ' '+ item.last)

// })

//pag 88

// function greet(name){
//     console.log( 'Hey ' +name);

// }
// greet('Roberto')

// const greet = (name) => {
//     return 'Hey ' + name;
// }

// const greet = name => 'Hey ' + name



//pag 94

// function validUserNames (arrayUserNames){
//     const filteresUsernames = arrayUserNames.filter(username => {
//         return username.length < 10
//         }
//     )
//     return filteresUsernames;
// } 
    


//97

function allEvens(arrayNumeros){
     return arrayNumeros.every(numero => numero%2 ===0)

}
