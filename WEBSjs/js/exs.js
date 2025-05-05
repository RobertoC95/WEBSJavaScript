//pag16

let myLuckynumber = 20;
let myName = 'Roberto';

//sintaxe tradicional
console.log( 'O meu nome é ' + myName + ' e o meu número favorito é ' + myLuckynumber );

//sintaxe tradicional
console.log( `O meu nome é ${myName} e o meu número favorito é ${myLuckynumber}` );


//pag17
const message= "    TASTE THE RAINBOW!     ";
console.log(message);

let whisper = message.trim().toLowerCase();
console.log(whisper);


//pag 30
const WORD ="skateboard";
let facialHair = WORD.replace("o","e");
console.log(facialHair);


//pag 30 
const WORDS ="skateboard";
let facialHairS = WORDS.slice(5).replace("o","e");
console.log(facialHairS);

let nome = "Roberto Couto";
nome.slice(0, nome.indexOf(' '));


//pag 35
/*let PrimeiroNome = prompt('Primeiro Nome');
console.log(PrimeiroNome);
let SegundoNome = prompt(' Apelido');
console.log(SegundoNome);
alert(`Olá, ${PrimeiroNome} ${SegundoNome}`);*/


//pag39
let DiadaSemana = prompt('Em que dia de semana estamos?')
if (DiadaSemana.toLowerCase()=="sexta"){
    alert('Sextou com S de Churrasco')
}else {
    alert("Boa Sorte")
}
    
let Password = prompt("Password");
if(Password.length>=6){
    alert("Acesso Permitido")
}else {
    alert("Acesso Negado")
}

let Dayofweek