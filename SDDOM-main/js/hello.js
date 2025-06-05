const btnEvent1 = document.getElementById('hello');
const btnEvent2 = document.getElementById('goodbye');
const btnEvent3 = document.getElementById('container');
const newP = document.getElementById("new-color");


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

btnEvent1.addEventListener('mouseover',alerta1);
btnEvent2.addEventListener('mouseover',alerta2);
btnEvent3.addEventListener('click', corNova);


let num1 = document.getElementById("#num1").value;
let num2 = document.getElementById("#num2").value;
let operacao = document.getElementById('operacao').value
let cal = document.getElementById("calcular");
let res = document.getElementById("resultado");


function calculadora(){
    switch(operação){

    case 'soma':
        res.innerText = num1 +num2

    case 'subtracao':
        res.innerText = num1 - num2

    case 'multiplicacao':
        res.innerText = num1 * num2

    case'divisao':
        res.innerText = num1 / num2
}
}


cal.addEventListener('click', calculadora)



