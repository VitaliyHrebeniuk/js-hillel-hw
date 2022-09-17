let demo = document.getElementById('demo');
let button = document.getElementById('choiceColor');
let figureArray = {
    cube:'cube',
    rectangle:'rectangle',
    circle: 'circle'
};

let figure = () =>{
    let howToSelect = document.getElementById('figure').value;
    demo.setAttribute('id',figureArray[howToSelect])
}

button.addEventListener('click',()=>{
    let inputColor = document.getElementById('color').value;
    demo.setAttribute('style','background-color:' + inputColor);
});


