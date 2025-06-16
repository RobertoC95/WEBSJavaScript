const btnEvent1 = document.getElementById('hello');
const btnEvent2 = document.getElementById('goodbye');
const btnEvent3 = document.getElementById('container');
const newP = document.getElementById("new-color");
let cal = document.getElementById("calcular");
let myForm = document.querySelector('form');

function alerta1(){
    alert("Buenos dias Matosinhos!")
}

function alerta2(){
    alert("Thank you, come again!")
}

function alerta3(){

}

function corRandom(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

function corNova(){
    const newColor = corRandom();
    this.style.backgroundColor = newColor;
    console.log(newColor)
    newP.innerText = newColor
}

function calculadora(){

    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let operacao = document.getElementById('operacao').value;
    let res = document.getElementById("resultado");

    switch(operacao){

    case 'soma':
        res.innerText = num1 +num2;
        break;

    case 'subtracao':
        res.innerText = num1 - num2;
        break;

    case 'multiplicacao':
        res.innerText = num1 * num2;
        break;

    case'divisao':
        res.innerText = num1 / num2;
        break;
}
}

btnEvent1.addEventListener('mouseover',alerta1);
btnEvent2.addEventListener('mouseover',alerta2);
btnEvent3.addEventListener('click', corNova);
cal.addEventListener('click', calculadora);


myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('cucu, faz validações e coisas de ui/ux, nomeadamente bloquer o botão');

    const animalVal = document.querySelector('#animal').value;
    const myList = document.querySelector('#zoo-animals');
    const myLi = document.createElement('li');
    myLi.textContent = animalVal;

    myList.appendChild(myLi);

    myForm.reset();


// esperamos que o servidor nos dê ok que recebeu os dados
//myForm.submit();
})






