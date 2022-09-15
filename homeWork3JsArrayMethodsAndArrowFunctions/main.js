function confirm(){
    return true
}
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => { console.log("Вы согласились."); }, // нужно обновить данное место

    () => { console.log("Вы отменили выполнение."); } // нужно обновить данное место
);

console.log('6')
const str = 'my-short-string'
let arr = str.split('-')
console.log(arr)

console.log('7')
const arr1 = ['JavaScript', 2015]
console.log(arr1.join(' '))

console.log('8')
let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}]
console.log(users.filter(item => item.age < 20));

console.log('9')
let users1 = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = users1.map(item => item.name);
console.log( names ); // [Vic, Petya, Jon]


console.log('10')
let arr2 = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    for(let i = 0; i< arr.length ;i++){
        let val = arr[i];
        if(val>=a || val<=b){
            arr.splice(i,1 );
        }

    }
}
filterRangeInPlace(arr2, 1, 4);
console.log( arr2 );

console.log('11')
let array = (stringa, separator)=>{ console.log(stringa.split(separator))};
array("golova dva uha", " ")

console.log('12')
let arr3 = [5, 3, 8, 1];
function slArray(arr, startIndex, endIndex){
    let range= []
    for(let i = startIndex; i<endIndex; i++ ){
        range.push(arr[i])
    }
    console.log(range)
}
slArray(arr3,1,4)

console.log('13')
let sum = (...number)=>{
    let val = 0;
    for (let i = 0; i<number.length;i++) {
        val+=i
    }
    console.log(val)}
sum(1,1,1)

