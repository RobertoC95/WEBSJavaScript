function changeHighlight(){
    const li =document.querySelectorAll('li')
for(element of li){
    if(element.classList.contains('highlight')){
         element.classList.remove('highlight')
    }else{
        element.classList.add('highlight')
    }
}
}


