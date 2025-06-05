function createButton(){
    let myDiv = document.getElementById('container');

    for (let i = 0; i <=100; i++) {
        let myNewB = document.createElement('button')
        myNewB.innerText = 'Botão' +i
        myNewB.classList.add('classListTest')

        myDiv.append(myNewB)
    }
}



