let demo = document.getElementById('demo');
let button = document.getElementById('choiceColor');
let inputColor = document.getElementById('color');

let figure = document.addEventListener('change', (event) =>{
    let howToSelect = document.getElementById('figure').value;
    demo.setAttribute('id', howToSelect)
});

button.addEventListener('click',()=>{
    //inputColor.value;
    //demo.setAttribute('style','background-color:' + inputColor);
    //можно было бы сделать еще проще вот так:
    demo.className = inputColor.target.value;
});


