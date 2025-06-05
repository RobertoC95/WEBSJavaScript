const colors = ['red', 'orange','yellow','green','blue','indigo','violet'];
const spans = document.querySelectorAll('span');
spans.forEach((element, index) => {
    element.style.color = colors[index];
});

// let counter =0;
// for(let element of spans){
//     element.style.color = colors[counter]
//     counter++
// }