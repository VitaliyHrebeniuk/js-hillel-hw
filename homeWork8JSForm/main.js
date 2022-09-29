const login = document.querySelector('.login');
const pswd = document.querySelector('.pswd');
const submit = document.querySelector('.submit');

login.addEventListener('change', () =>{
    if (/[0-9a-zA-z]{2,15}/.test(login.value)===false){
        login.classList.add('red')
    }else{
        login.classList.remove('red')
    }
});

pswd.addEventListener('change', () =>{
    if (/(?=.*[#$])(^[a-z0-9#$]{2,15})/.test(pswd.value)===false){
        pswd.classList.add('red')
    }else{
        pswd.classList.remove('red')
    }
});

submit.addEventListener('click', (event) =>{
    event.preventDefault();
    if(/[0-9a-zA-z]{2,15}/.test(login.value)===true && /(?=.*[#$])(^[a-z0-9#$]{2,15})/.test(pswd.value)===true){
        console.log(`login:${login.value} pswd:${pswd.value}`)
    }
})