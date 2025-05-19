// let myFirstvar = "Olá Mundo!";
// let jsIsCool = true;

// console.log(myFirstvar);
// console.log(jsIsCool);
// jsIscool= "aborreci-me dele";
// console.log(jsIsCool);
// jsIscool= "12";
// console.log(jsIsCool*3);

// let millionDolarQuestion = prompt('que tal a semana com feriado e apagão?');
// console.log(millionDolarQuestion);

/* let millionDolarQuestion = null;
millionDolarQuestion = prompt('que tal a semana com feriado e apagão?') */

// let day1 = 'segunda';
// let day2 = 'terça';
// let day3 = 'quarta';

//console.log('a segunda posição é' + day3[2]);

//arrays
// let weekDays = ['segunda', 'terça', 'quarta'];
//let StudentGrades = [17, 18, 19, 20];

//let ourSuperArr = ['segunda', true, 'Joana',17];

// console.log('o array na posição 1 tem' + weekDays[1][0].toUpperCase); //primeiro procura qual a palavra no array a segunda a letra


// ambos têm dentro o A
// weeDays[1][4];
// let myDay = weekDays[1];
// console.log(myDay[4]);


//métodos de arrays
// let shoppinglist = ['batatas', 'pão'];
//let item = prompt('qual é o item a adicionar');

// shoppinglist.push(item);
// console.log(shoppinglist);

// for(let i = 0 ; i<shoppinglist.length ; i++){
//     console.log('compra ' + shoppinglist[i]);
// }

// let modules = [
//     ['java', 'funções'],
//      'js',
//       'programação de servidor'];
// console.log(modules[0][1][2]);  //o terceiro [] para ir buscar um elemento de uma string

// let courseStructure = {
//     courseName : 'Software Developer',
//     hours : 1000,
//     modules : ['js', 'algoritmia', 'mysql']
// }

// courseStructure.courseName = 'AWS';
// console.log(courseStructure);

function myshoppingList(){

    let myshoppingList = ['batatas', 'pão'];
let item = prompt('qual é o item a adicionar');

myshoppingList.push(item);
console.log(myshoppingList);

for(let i = 0 ; i<myshoppingList.length ; i++){
    console.log('compra ' + myshoppingList[i]);
}
for(let key of myshoppingList){
    console.log(key);
}
}
function modelObj(){
    const product = {
    nome : 'chapeu',
    price : 1.99,
    moeda : '€',
    inStock : true,
    colors : ['vermelho', 'azul', 'verde']
}
console.log('o produto custa ' + product.price + product.moeda);
console.log('a cor do produto é' + product.colors[2])

product.price = 2.55;
console.log(product.price + product.moeda);
}