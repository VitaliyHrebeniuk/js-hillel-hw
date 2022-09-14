
console.log('4a')
function add(a,b){
    return console.log(a + b)
}
add(1, 2)

console.log('4b')
function minus(a,b){
    return console.log(a - b)
}
minus(2, 1)


console.log('4c')
function division(a,b){
    return console.log(a / b)
}
division(2, 1)

console.log('4d')
function multiplication(a,b){
    return console.log(a - b)
}
multiplication(2, 1)

console.log('5')
function fivePlus(){
    for(let i1 = 5; i1>= 1; i1--){
        console.log(i1)
    }
}
fivePlus()

console.log('6')
function fiveMinus(){
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
fiveMinus()

console.log('7')
function pow(a,b){
    return console.log(Math.pow(a,b))
}
pow(2,2)

console.log('8')
function isBigger(a,b){
    if(a > b){
        return console.log(true)
    }else{
        return console.log(false)
    }
}
isBigger(2,1)
isBigger(1,2)

console.log('9')
function isSmaller (a,b){
    if(a < b){
        return console.log(true)
    }else{
        return console.log(false)
    }
}
isSmaller (2,1)
isSmaller (1,2)







