

function number(a,b){
    if(a>b){
        console.log(a)
        number(a-1,b)
    }else if(a<b){
        console.log(a)
        number(a+1,b)
    }else{
        console.log(a)
    }
}
number(1,5)