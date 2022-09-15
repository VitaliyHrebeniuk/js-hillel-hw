let button = document.getElementById('button');
let h1 = document.getElementById('golova');
let h2 = document.getElementById('golova2');
let login = localStorage.getItem('login');
let pswd = localStorage.getItem('pswd');

button.addEventListener('click',()=>{
    localStorage.setItem('login', document.getElementById('login').value)
    localStorage.setItem('pswd', document.getElementById('pswd').value)
});
h1.innerHTML = login;
h2.innerHTML = pswd;



