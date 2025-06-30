// document.getElementById('myform').addEventListener('submit', function(event){
//     event.preventDefault();

//     const formData = new FormData(this);
//     const nomeProduto = formData.get('produto');
//     const quantidade = formData.get('qt');

//         const lista = document.getElementById('listaCompras');
//         const item = document.createElement('li');
//         item.textContent = `${nomeProduto} ${quantidade}`
//         lista.appendChild(item);  
    
//     this.reset();
// })


//função que faz a consulta À Api, traz o resultado em json e tranforma de forma a que o JS consiga interpretar
const loadTVShow = async() => {
  const result = await fetch('https://api.tvmaze.com/singlesearch/shows?q=friends');
  const data = await result.json();
 
  return data;
}
 
//função que constrói com o resultado da api (quando ele chegar) o html
const getData = async() => {
  const result = await loadTVShow();
 
  //console log ou criar elementos, etc
  console.log(result)
}
 
getData();