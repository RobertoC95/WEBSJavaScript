//pag16

// let myLuckynumber = 20;
// let myName = 'Roberto';

// //sintaxe tradicional
// console.log( 'O meu nome é ' + myName + ' e o meu número favorito é ' + myLuckynumber );

// //sintaxe tradicional
// console.log( `O meu nome é ${myName} e o meu número favorito é ${myLuckynumber}` );


// //pag17
// const message= "    TASTE THE RAINBOW!     ";
// console.log(message);

// let whisper = message.trim().toLowerCase();
// console.log(whisper);


// //pag 30
// const WORD ="skateboard";
// let facialHair = WORD.replace("o","e");
// console.log(facialHair);


// //pag 30 
// const WORDS ="skateboard";
// let facialHairS = WORDS.slice(5).replace("o","e");
// console.log(facialHairS);

// let nome = "Roberto Couto";
// nome.slice(0, nome.indexOf(' '));


//pag 35
/*let PrimeiroNome = prompt('Primeiro Nome');
console.log(PrimeiroNome);
let SegundoNome = prompt(' Apelido');
console.log(SegundoNome);
alert(`Olá, ${PrimeiroNome} ${SegundoNome}`);*/


//pag39
// let DiadaSemana = prompt('Em que dia de semana estamos?');
// if (DiadaSemana.toLowerCase().trim()=="sexta"){
//     alert('Sextou com S de Churrasco');
// }else {
//     alert("Boa Sorte");
// }
    
// let Password = prompt("Password");
// if(Password.length>=6){
//     alert("Acesso Permitido");
// }else {
//     alert("Acesso Negado");
// }

// let userpass = prompt('Qual é a sua pass?');
// if (userpass.length <6){
//     alert('A pass tem de ter pelo menos 6 caracteres');
// }else {
//     alert("pass ok");
// }
    
//pag43

// let planets = ['Mercúrio', 'Vénus', 'Terra', 'Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];

// console.log(planets)
// planets[3] = 'Marte';

// planets.pop();
// console.log(planets);

// planets.unshift('Namek');
// console.log(planets);


//pag55

// for(let i=1; i<7; i++){
//     console.log('da ba dee da ba daa')
// }

// for(let n = 25; n > 4; n -= 5){
//     console.log(n);
// }


//pag 58

// const people =['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];
// console.log(people)

// for(let i = 0 ; i < people.length ; i++){
//     console.log(people[i].toUpperCase())
// }

//pag62

let lista = ['agua', 'cerveja', 'vinho']
console.log(lista);
// let item = prompt('qual é o item a adicionar?');

// lista.push(item);

// console.log(lista);

let codigo = 'fim'

while(lista != codigo){
    let item = prompt('qual é o item a adicionar?')
    lista.push(item);
}



//Parte 2:
// No prompt, caso o user colocar apagar, apaga a última coisa que adicionou.
 
// Parte 3:
// No prompt, quando o user coloca apagar abre um prompt para escrever o item a apagar e apaga o mesmo.