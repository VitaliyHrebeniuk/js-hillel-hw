let input = document.querySelector('#to-do');
let button = document.querySelector('#addButton')
let ul = document.querySelector('ul')

button.addEventListener('click',()=>{
    let li = ul.innerHTML;
    li += `<li class="yellow"> ${input.value} <button>Delete</button></li>`
    ul.innerHTML = li;
})

ul.addEventListener('click', (event) =>{
    event.target.classList.toggle('green');
    if(event.target.tagName == 'BUTTON'){
        event.target.parentElement.remove();
    }
})


