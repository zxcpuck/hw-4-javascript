//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function ploscha (a,b){
//     document.write(a*b)
// }
// ploscha(5,10)

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function ploschaKola (r){
//     document.write(r*r*3.14)
// }
// ploschaKola(5)

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function ploschaCilindra (r,h){
//     document.write(2*r*h)
// }
// ploschaCilindra(5,8)

//- створити функцію яка приймає масив та виводить кожен його елемент
// function arr (array){
//     for (const element of array) {
//         document.write(element)
//     }
// }
// let array1 = [1,2,3,4,5]
// arr(array1)

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function paragraph(){
//     return arguments[0]
// }
// document.write(paragraph(`<p>Hello Okten</p>`))

//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function ulli(txt){
//     document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`)
// }
// ulli('hi')

//- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function ulli(txt, number) {
//     document.write('<ul>');
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write('</ul>');
// }
// ulli('hello', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// function arr(array){
//     for (const element of array) {
//         document.write(`<li>${element}</li>`)
//     }
// }
//
// arr([1,2,3,4,5,'hi','hello',true,false])

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function arrayOfObj(obj){
//     for (const element of obj) {
//         document.write(`<div>${element.id} - ${element.age} - ${element.name}</div>`)
//     }
// }
// arrayOfObj([{id:1, name: 'Vasya', age: 31},
//     {id:2, name: 'Petya', age: 30},
//     {id:3, name: 'Kolya', age: 29},
//     {id:4, name: 'Olya', age: 28},
//     {id:5, name: 'Max', age: 30}])

// - створити функцію яка повертає найменьше число з масиву
// function minValue(array){
//     let min = array[0]
//     for (let i = 1; i < array.length; i++) {
//         const element = array[i];
//         if (min > element){
//             min = element
//         }
//     }
//     return min
// }
// document.write(minValue([55,32,95,3,90,54,-19]))

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr){
//     let calculator = 0
//     for (const element of arr) {
//         calculator = calculator + element;
//     }
//     return calculator;
// }
// document.write(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2){
//     let storage = arr[index1] // робимо память для цього числа
//     arr[index1] = arr[index2]
//     arr[index2] = storage
//     return arr
// }
// document.write(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
    if (exchangeCurrency === 'USD'){
        document.write(sumUAH / currencyValues.values())
    }
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')