let demo = document.getElementById('demo');
let button = document.getElementById('choiceColor');

let figure = () =>{
    let howToSelect = document.getElementById('figure').value;
    if(howToSelect === 'cube'){
        demo.setAttribute('id','cubeDiv');
    }else if(howToSelect === 'rectangle'){
        demo.setAttribute('id','rectangleDiv');
    }else if(howToSelect === 'circle'){
        demo.setAttribute('id','circleDiv');
    }else {
        demo.innerHTML = '<div></div>'
    }
}

button.addEventListener('click',()=>{
    let inputColor = document.getElementById('color').value;
    demo.setAttribute('style','background-color:' + inputColor);
});


