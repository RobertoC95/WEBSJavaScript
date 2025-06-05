const mySpan = document.getElementById('History');
console.log(mySpan);

let MyLis = document.querySelectorAll('toctitle');
for(let element of MyLis){
    element.style.backgroundColor = 'green';
}


function createP(){
    let myNewP = document.createElement('p');
    myNewP.innerText = 'Thank you, come again!';

    document.body.appendChild(myNewP)
}