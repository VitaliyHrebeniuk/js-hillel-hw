const a = 1;
const b = 2;
const c1 = a + b;
console.log('Пункт 5а'+ '' + c1)

const c2 = b - a;
console.log('Пункт 5b'+ '' + c2)

const c3 = a * b;
console.log('Пункт 5c'+ '' + c3)

const c4 = a / b;
console.log('Пункт 5d'+ '' + c4)

console.log('Пункт 6')
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('Пункт 7')
for(let i1 = 5; i1>= 1; i1--){
    console.log(i1)
}

console.log('Пункт 8')
function getMarkInfo(condition) {
    if(condition === 10){
        console.log('У вас максимальный балл')
    }
    else {
        console.log('У вас средний балл')
    }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('Пункт 9')

function getDayInfo(position) {
    obj = {
        0:'Sunday',
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday'
    }
    if(position<=6){
        console.log(obj[position])
    }else{
        console.log('Wrong Data')
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)

console.log('Пункт 10')
arr = ['a', 'b', 'c']
arr.push(1, 2, 3)
console.log(arr)

console.log('Пункт 11')

arr2 = [1, 2, 3]
arr3 = [4, 5, 6]
arr4 = arr2.concat(arr3)
console.log(arr4)

console.log('Пункт 12')
function countNumber(number) {
    let sum = 0;
    for (i = 1; i <= number; i++) {
        sum += i
    }
    console.log(sum)
}
countNumber(3)





