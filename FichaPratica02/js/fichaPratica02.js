//1
let btnEvent1 = document.getElementById("botao1")
let btnEvent2 = document.getElementById("botao2")
let btnEvent3 = document.getElementById("botao3")

function corRandom(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}
 

function mudarCor(){
    const corNova = corRandom();
    this.style.backgroundColor = corNova;
}

btnEvent1.addEventListener('click', mudarCor);
btnEvent2.addEventListener('click', mudarCor);
btnEvent3.addEventListener('click', mudarCor);


//2
let christmasGifts = [
    {
      name: 'perfume',
      price: 40,  
    },
    {
       name: 'vinho',
      price: 10,  
    },
    {
        name: 'creme',
      price: 10, 
    }
]
const gifts = christmasGifts.filter(gift => gift.price<20);
console.log(gifts);


//3
const users = [
    {nome: 'Rafaela', idade:22, curso:'JS Avançado'},
    {nome: 'Bruno', idade:22, curso:'UI/UX Design'},
    {nome: 'Carla', idade:22, curso:'AWS'}
];
const first = users.map(users =>`${users.nome} tem ${users.idade} e está inscrito no curso ${users.curso}`);
   console.log(first);


//4, 5 and 6
let btnEvent4 = document.getElementById("botao4") 
function escrever(){
    const myP= document.createElement('p');
    myP.innerText ="É só mais um esforço para tirar o curso de Software Developer e serei um grande programador."
    
    const myDiv = document.querySelector('div')
    const myButton5 = document.createElement('button');
    const myButton6 = document.createElement('button');
    myButton5.innerText ='aumentar letra'
    myButton6.innerText ='diminuir letra'
    
    myDiv.appendChild(myP);
    myDiv.appendChild(myButton5);
    myDiv.appendChild(myButton6);
    myButton5.addEventListener('click', function(){
        myP.style.fontSize = '50px';
        myP.style.textAlign = 'center'

    });
    myButton6.addEventListener('click', function(){
        myP.style.fontSize = '10px'; 
         myP.style.textAlign = 'end'
    });
}

btnEvent4.addEventListener('click', escrever);


//7



