function multiply(num1, num2){
   let total = num1 * num2;
    return total;
}

function isShortsWeather(temp){
    if(temp > 25){
        return true;
    }else return false;
}

function lastElement(){
    let array = ['ze','manel']
    for(element of array)
        if(array[array.length-1] == null){
            return null;
        }else{
            return array[array.length-1]
        }

}


function sumArray(){
    let arraySum = [50,50,1];
    let sum=0;

    for (let element of arraySum)
       
            sum += element;
            
    
        return console.log(sum)

}


function returnDay(){

    let DiadaSemana = ['segunda' , 'terça' ,'quarta' ,'quinta' ,'sexta' ,'sabado' ,'domingo'];

    let escolha = prompt('Escolha um dia da semana (de 1 a 7)')

    escolha = Number(escolha)

    if(escolha < 0 || escolha > 7){
        return null;
    }else{
    for (let element in DiadaSemana)
        return DiadaSemana[escolha-1]
        }
}