function change(){
    let myImage = document.querySelector('img');
    if(myImage.getAttribute('src').includes('egg')){
        myImage.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')

    }else {
        myImage.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg')
    }
}



// function change(){
//     let myImage = document.querySelector('img');
//     if(myImage.getAttribute('src') == 'https://devsprouthosting.com/images/egg.jpg'){
//         myImage.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')

//     }else {
//         myImage.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg')
//     }
// }
