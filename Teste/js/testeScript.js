// ex1
// O JS serve para dar animação e movimento, validação de formulários, usando por exemplo butões com eventos associados para executar uma determinada função

//ex2

//O elemento input será criado em html na criação de um formulário e apenas depois disso usamos JS para manipular os dados inseridos pelo utilizador

//ex3
//.1 falso, rtorn53
//.2 falso, hello retorna 'Olá Rita' numa linha e 31 na linha de baixo
//.3 falso, age retorna o mesmo do que hello
//.4 15
//.5 falso, num1 continua a ser uma string
//.6 let num1 = 1 e agora num1 + num2 =16   ou num1 ='1' number(num1)+num2=16
//.7 boolean

//ex4
//.1
let passwords = [1234, 'sara1986', 2023];
let userPassword = prompt('Qual a password');
passwords.push(userPassword);
console.log(passwords);

//.2
for(let element of passwords){
    if (element == userPassword){
     alert('Acertou na pass');
     break;
 }else {
     alert("Pass errada");
     break;
 }
}

//.3

const pass = passwords.filter(pass => pass.length > 6);
console.log(pass);

//ex5
const studentGrades = [
  {
    studentName: "Rita",
    grade: 16,
    nameAndGrade() {
      return `A ${this.studentName} tem nota ${this.grade}`;
    },
  },
  {
    studentName: "Luís",
    grade: 20,
  },
  {
    studentName: "João",
    grade: 18,
  },
  {
    studentName: "André",
    grade: 15,
  },
  {
    studentName: "Luísa",
    grade: 19,
  },
];

//.1
const first = studentGrades.map(studentGrades =>`A  nota de ${studentGrades.studentName} é ${studentGrades.grade} `);
   console.log(first);

   for(let element of first){
    console.log(element)
   }

//.2
// Undefined pois 5 é o tamanho do array logo o maior index é 4

//.3
// Verdadeiro

//ex6

//.1
function substituir(){
    const novaMensagem = document.querySelector('h2');
novaMensagem.replaceWith('Os meus ensinamentos para a vida');
// novaMensagem.innerText = ;
}


//.2
const btnEvent1 = document.querySelector('button');
const lista = document.getElementById('myList');
let myForm = document.querySelector('form');

function sucesso(){
let itens = lista.querySelectorAll('li');
    itens.forEach(item => {
    if (!item.innerText.includes(' com sucesso')) {
        item.append(' com sucesso');
    }
    });
  }
  
//.3

novoTopico = document.getElementById('myItem')
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const myLi = document.createElement('li');
    myLi.textContent = novoTopico.value;

    myList.appendChild(myLi);

    myForm.reset();
});

//ex7
//"title": "Grave of the Fireflies"


//ex8
document.addEventListener('keydown', evento => {
    console.log(evento.key)
  if (evento.key == 'Escape') {
    alert("Tens a certeza que queres entregar o teste?")
}
});


let num1 = '5';
let num2 = '3';


function helloStudent(name, age){
    console.log('Ola ' + name);
    return age;
}
