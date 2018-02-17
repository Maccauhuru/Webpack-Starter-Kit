/*jshint esversion: 6 */ 
const arrNum = [1,2,3];
arrNum.push(4,5);
console.log(arrNum);

//general syntax
let a ="hello";
let b ="world";
let c =`Hello ES6 & ${a} ${b} today!`;
console.log(c);

console.log(
  "===================================================================================="
);

//using the spread operator
let arrA = [7,8,9];
let arrB = [6, ...arrA,10];
console.log(arrB);

//using the spread function 2

function printItems(a,b,c){
    console.log(a,b,c);
}

let pnums = [10,20,30];
//printItems(pnums[0], pnums[1], pnums[2]);
printItems(...pnums);

console.log(
  "===================================================================================="
);

//destructuring assignment array
let cdes =  [100,200];
let [cdes0,cdes1] =cdes;
console.log(cdes0, cdes1);

//destructuring assignment array 2
let artists= ["Bounty","Kartel","Merciless"];
let [Killer,War_Angel ,War_Head]= artists;
console.log(Killer,War_Angel,War_Head);

//destructuring assignment array 3
let artists2 = ["Bounty"," Vybez Kartel","Merciless"];
let [Killers,...WarArtists]= artists2;
console.log(Killer,WarArtists);

console.log("====================================================================================");

//destructuring assignment Object 1
let wizard = {magical:true,power:10};
// let magical = wizard.magical;
// let power = wizard.power;
let {magical,power}=wizard;
console.log(magical,power);

//destructuring assignment Object 1
let buyEP = false;
let money = 10;

let buyNewEP = {buyEP : true,money:20};
({buyEP,money} = buyNewEP);
console.log(buyEP,money);

//arrow functions
this.a ="Simba";

 function print(){
   this.a=50;
   console.log(this.a);
 }
 print();