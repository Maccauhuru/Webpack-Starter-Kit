/*jshint esversion: 6 */ 
const arrNum = [1,2,3];
arrNum.push(4,5);
console.log(arrNum);

//general syntax
let a ="hello";
let b ="world";
let c =`Hello ES6 & ${a} ${b} today!`;
console.log(c);

//using the spread operator
let arrA = [7,8,9];
let arrB = [6, ...arrA,10];
console.log(arrB);

