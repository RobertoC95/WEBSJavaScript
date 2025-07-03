//PDF 1

//Pag 17 (Variaveis)
// let myLuckyNumber = 20;
// let myName = "Roberto";
// alert(myName + " " + myLuckyNumber);

//Pag 28 (Constantes)
// const message = " TASTE THE RAINBOW ";
// let whisper = message.toLocaleLowerCase().trim();
// console.log(whisper);

//Pag 30 (Slice replace)
// const word = "skateboard";
// console.log(word.slice(5));
// let facialHair = word.slice(5).replace("o", "e");
// console.log(facialHair);

//Pag 35 (Prompt Alert Console.log)
// let nome = prompt("Qual é o seu nome?");
// let apelido = prompt("Qual é o seu apelido?");
// alert(`Olá, ${nome}  ${apelido}`);

//Pag 39 (Switch)
// let diaDaSemana = prompt('Que dia da semana é?');
// switch(diaDaSemana.toLocaleLowerCase().trim()){

//     case 'segunda':
//         alert("NOOOOOOOOOO")
//         break;

//     case 'sexta':
//         alert('Se prepara figado que hoje eu vou lhe usar!')
//         break;

//     default:
//         alert('You had one job!')
//         break;
// }
// let password = prompt("Insira uma passe de 6 caracteres")
// if(password.length !== 6){
//     alert('What did I just say!!')
// }

//Pag 43 (Array)
// let planetas = [
//   "Mercúrio",
//   "Vénus",
//   "Terra",
//   "Mart",
//   "Jupiter",
//   "Saturno",
//   "Urano",
//   "Neptuno",
//   "Plutão",
// ];
// planetas[3] = "Marte";
// console.log(planetas);
// planetas.pop();
// console.log(planetas);
// planetas.unshift("Namek");
// console.log(planetas);

//Pag 47 (splice)
// const airplaneSeats = [
//   ["Ruth", "Anthony", "Stevie"],
//   ["Amelia", "Pedro", "Maya"],
//   ["Xavier", "Ananya", "Luis"],
//   ["Luke", null, "Deniz"],
//   ["Rin", "Sakura", "Francisco"],
// ];
// airplaneSeats[3][1] = "Roberto";
// console.log(airplaneSeats);

//Pag 50 (key -> value)
// const product = {
//   nome: "arroz",
//   inStock: true,
//   price: 1.99,
//   colors: ["vermleho", "azul", "verde"],
// };
// console.log(product.price);
// console.log(product.colors[2]);
// product.price = 2.55;
// console.log(product.price);

//Pag 55 (loop)
// for (let i = 0; i < 6; i++) {
//   console.log("Da ba dee da ba daa");
// }

// for (let n = 25; n > 4; n -= 5) {
//   console.log(n);
// }

//Pag 58 (iterar arrays)
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for(Element of people){
//     console.log(Element.toLocaleUpperCase())
// }

//Pag 62 (loops)
const lista = ["Arroz", "Massa", "Farinha"];

// while (true) {
//   let item = prompt("O que quer adicionar?");
//   if (item === "fim") {
//     break;
//   }
//   listaCompra.push(item);
// }
// while(true){
//     let item = prompt("qual é o item a adicionar (ou 'fim' para terminar, 'apagar' para remover um item)");
//     if(item === 'fim'){
//         console.log(lista);
//         break;
//     }else if(item === 'apagar'){
//         let itemApagar = prompt("Digite o nome do item que deseja apagar:");
//         let index = lista.indexOf(itemApagar);
//         if(index !== -1){
//             lista.splice(index, 1);
//             alert(`item "${itemApagar}" removido.`);
//             console.log(lista);
//     }else {
//             alert(`Item "${itemApagar}" não encontrado na lista.`);
//             console.log(lista);
//         }
//     }else{
//             lista.push(item);
//             console.log(lista);
//         }
//         console.log(lista);
//     }

// console.log(listaCompra)

// Pag 65 (funções)
// function printHeart(){
//     console.log('<3');
// }

//Pag 69 (argumentos)
// function rant(message){
//      for(let i=0; i<3; i++){
//         console.log(i + ' ' + message.toUpperCase());
//     }
// }
// function whatDoYouHate(){
//     let hate = prompt('O que é que odeias?');
//     rant(hate);
// }

//Pag 72 (função)
// function isSnakeEyes(num1, num2){
//      if((num1 == 1) && (num1 == num2)){   //dois iguias valor, 3 iguais valor e tipo
//         console.log('Yay, Ekans');
//     }else{
//         console.log('ArrrboK');
//     }
// }

//Pag 86 (map arrow function)
// const fullNames = [
//   { first: "Albus", last: "Dumbeldore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];

// const firstNames = fullNames.map(function (name) {
//   return name.first;
// });
// console.log(firstNames);

//Pag 88
// const greet = (name) => {
//      return 'Hey ' + name;
//  }

//Pag 94 (arrow functioon)
// const arrayUserNames = ['Roberto', 'Couto', 'lsdkfjghsdklfhdfçs']
// function validUserNames(arrayUserNames){
//     const filteredUserNames = arrayUserNames.filter(username => username.length <10)
//     return filteredUserNames;
// }

//Pag 97
// function allEvans(arrayNumeros) {
//  return arrayNumeros.every((numero) => numero % 2 === 0);
// }

//*******************************************************

//ficha 1

//1

// const qualquer =
//   "A turma de UI/UX é dinâmica e tem as características essenciais para brilhar numa empresa";
// alert(qualquer);

// console.log( `a letra U aparece na posição ` + qualquer.indexOf('U'));
// console.log( `a letra X aparece na posição ` + qualquer.indexOf('X'));

//2

// while (true) {
//   let codigoPredio = 20;
//   let codigoUser = prompt("insira o codigo");
//   if (codigoPredio === Number(codigoUser)) {
//     alert("Welcome");
//     break;
//   } else {
//     alert("porta trancada");
//   }
// }

//8
// const array = [2, 5, 8];
// function sumArray() {
//   const sum = array.reduce((acc, num) => acc + num, 0);
//   console.log(sum);
// }

//*******************************************************

//DOM

//Pag 9 (get Element by ID)

// const image = document.getElementById("unicorn");
// console.log(image);

// const heading = document.getElementById("mainheading");
// console.log(heading);


//Pag 12



























