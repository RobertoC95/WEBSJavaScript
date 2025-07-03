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


let myButton7 = document.getElementById('button7');
let textoMagico = document.getElementById('solucao');

function esconder(){

    if(textoMagico.style.display === 'none'){
        textoMagico.style.display = 'block'
    }else {
        textoMagico.style.display = 'none'
    }
    
}

myButton7.addEventListener('click', esconder);



// 8


let contador = +document.getElementById("contador").innerText;
const myButton8 = document.getElementById('aumentar');
const myButton9 = document.getElementById('diminuir');
const myButton10 = document.getElementById('zerar');

function aumentar(){
    contador +=1;
    document.getElementById("contador").innerText = contador
    
}

function diminuir(){
    contador -=1;
    document.getElementById("contador").innerText = contador
    
}

function reset(){
    contador =0;
    document.getElementById("contador").innerText = contador
   
}


myButton8.addEventListener('click', aumentar);
myButton9.addEventListener('click', diminuir);
myButton10.addEventListener('click', reset);

document.addEventListener('keydown',logKey )

function logKey(event){
    if (event.key === 'ArrowUp') {
        aumentar()
    }else if(event.key === 'ArrowDown'){
        diminuir()
    }else if(event.key === '0'){
        reset()}
    }


//9

const myButton11 = document.getElementById("Aprendido");
const myButton12 = document.getElementById("botaoAdicionar");
let lista = document.getElementById("lista");

function aprender(){
    let itens = lista.querySelectorAll('li');
    itens.forEach(item => {
        if (!item.innerText.endsWith(' -aprendido')) {
            item.append(' -aprendido');
        }
    });
}

function adicionar(){
    let novaLi = document.createElement('li');
    novaLi.innerText = prompt("O que aprendeu mais?")
    if (novaLi.innerText) { 
        lista.appendChild(novaLi);
    }
}

myButton11.addEventListener('click', aprender)
myButton12.addEventListener('click', adicionar)




//Correcção da ficha: feito pelo Marcelo e validado por mim


// //exercicio1//
// function mudarCor(elemento, cor) {
//     elemento.style.backgroundColor = cor;
// }


// const Vermelho = document.getElementById('vermelho');
// const Verde = document.getElementById('verde');
// const Laranja = document.getElementById('laranja');


// Vermelho.addEventListener("click", function() {
//     mudarCor(this, 'red');
// });

// Verde.addEventListener("click", function() {
//     mudarCor(this, 'green');
// });

// Laranja.addEventListener("click", function() {
//     mudarCor(this, 'orange');
// });

// //exercicio2//
// let christmasGifts = [
//     {
//     nome: 'perfume',
//     price: 40,
//     },
//     {
//     nome: 'vinho',
//     price: 10,
//     },
//     {
//     nome: 'creme',
//     price: 10,
//     }
// ]

// // let itens = [];

// // christmasGifts.forEach( preco => {
// //     if (preco.price < 20) {
// //        itens.push({
// //             nome: preco.nome,
// //             price: preco.price
// //         });
// //     }
// // });

// // console.log(itens);


// let itens = christmasGifts.filter(preco => preco.price < 20);
// console.log(itens);

// //exercicio3//
// const users = [
//     {nome: "Rafaela", idade: 22, curso: "JS Avançado"},
//     {nome: "Bruno", idade: 30, curso: "UI/UX desegn"},
//     {nome: "Carla", idade: 25, curso: "AWS"}
// ];

// // users.forEach(texto => {
// //   console.log(texto.nome + " tem " + texto.idade + " anos "
// //     + "e está inscrito(a) no curso de " + texto.curso + "."
// //   )
// // });

// users.map(function(user) {
//   console.log(user.nome + " tem " + user.idade + " anos e está inscrito(a) no curso de " + user.curso + ".");
// });

// //exercicio 4 , 5 , 6//
// const button = document.getElementById('addTexto');
// const texto = document.getElementById('textoaqui');

// button.addEventListener('click', function() {
//     const p = document.createElement('p');
//     p.innerText = "É só mais um esforço para tirar o curso de Software Developer e serei um grande programador.";

//     const Aumentar = document.createElement('button');
//     Aumentar.innerText = 'Aumentar texto';

  
//     const Diminuir = document.createElement('button');
//     Diminuir.innerText = 'Diminuir texto';

//     Aumentar.addEventListener('click', () => {
//         let tamanhoAtual = parseInt(window.getComputedStyle(p).fontSize);
//         p.style.fontSize = (tamanhoAtual + 1) + 'px';
//         p.style.textAlign = "center";
//     });

   
//     Diminuir.addEventListener('click', () => {
//         let tamanhoAtual = parseInt(window.getComputedStyle(p).fontSize);
//             p.style.fontSize = (tamanhoAtual - 1) + 'px';
//             p.style.textAlign = "right";
//     });

//     texto.appendChild(p);
//     texto.appendChild(Aumentar);
//     texto.appendChild(Diminuir);
// });

// //exercicio7//
// const botao = document.getElementById('botao');
//     const paragrafo = document.getElementById('paragrafo');

//     botao.addEventListener('click', function () {
//       if (paragrafo.style.display === 'none') {
//         paragrafo.style.display = 'block';
//       } else {
//         paragrafo.style.display = 'none';
//       }
//     });

// //exercicio8//
// let count = 0;

// function atualizarContador(valor) {
//   count += valor;
//   document.getElementById('contador').textContent = count;
// }

// function resetarContador() {
//   count = 0;
//   document.getElementById('contador').textContent = count;
// }

// document.getElementById('aumentar').addEventListener('click', () => atualizarContador(1));
// document.getElementById('diminuir').addEventListener('click', () => atualizarContador(-1));
// document.getElementById('zerar').addEventListener('click', resetarContador);

// document.addEventListener('keydown', evento => {
//     console.log(evento.key)
//   if (evento.key == 'ArrowUp') {
//     atualizarContador(1);
//   } else if (evento.key == 'ArrowDown') {
//     atualizarContador(-1);
//   }else if (evento.key == "0"){
//     resetarContador();
//   }
// });

// //exercicio 9 e 10//
// const aprendido = document.getElementById('Aprendido');
// const lista = document.getElementById('lista');
// const botaoAdicionar = document.getElementById('botaoAdicionar');


// aprendido.addEventListener('click', function () {
//   const itens = lista.querySelectorAll('li');

//   itens.forEach(function (item) {
//     if (!item.innerText.includes('– aprendido')) {
//       item.innerText += ' – aprendido';
//     }
//   });

//   botaoAdicionar.addEventListener('click', function() {
//   const novaAprendizagem = prompt('O que mais você aprendeu em JS?');
//   if(novaAprendizagem != ""){
//     const novoItem = document.createElement('li');
//     novoItem.innerText = novaAprendizagem;
//     lista.appendChild(novoItem);
//     }
// });
// });




//1
btnEvent1.addEventListener('click', function mudarCor (elemento, cor) {

}
)
