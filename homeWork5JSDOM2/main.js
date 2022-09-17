let demo = document.getElementById('demo');
let button = document.getElementById('choiceColor');

let figure = document.addEventListener('change', (event) =>{
    let howToSelect = document.getElementById('figure').value;
    demo.setAttribute('id', howToSelect)
});

button.addEventListener('click',()=>{
    let inputColor = document.getElementById('color').value;
    demo.setAttribute('style','background-color:' + inputColor);
});


