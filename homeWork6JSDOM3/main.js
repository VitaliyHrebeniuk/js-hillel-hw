let input = document.querySelector('#to-do');
let button = document.querySelector('#addButton')
let ul = document.querySelector('ul')
let li = '';

button.addEventListener('click',()=>{
    li += `<li class="yellow"> ${input.value} <button>Delete</button></li>`
    ul.innerHTML = li;
    input.value = '';
})

ul.addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('green');
    }
    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
    }
})


