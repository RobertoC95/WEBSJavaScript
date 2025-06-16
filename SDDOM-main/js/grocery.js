document.getElementById('myform').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(this);
    const nomeProduto = formData.get('produto');
    const quantidade = formData.get('qt');

        const lista = document.getElementById('listaCompras');
        const item = document.createElement('li');
        item.textContent = `${nomeProduto} ${quantidade}`
        lista.appendChild(item);  
    
    this.reset();
})

