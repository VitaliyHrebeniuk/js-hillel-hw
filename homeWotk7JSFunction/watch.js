let watch = document.querySelector('#watch');

function clocks(){
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if(watch.classList.contains('short')){
        watch.innerHTML = `${h}:${m}`;
    }else{
        watch.innerHTML = `${h}:${m}:${s}`;
    }
}

watch.addEventListener('click',()=>{
    watch.classList.toggle('short')
})

setInterval(clocks,1000)

