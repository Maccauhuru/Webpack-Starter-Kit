/*jshint esversion: 6 */

console.groupCollapsed("General ES6 Syntax");

const arrNum = [1, 2, 3];
arrNum.push(4, 5);
console.log(arrNum);

//general syntax
let a = "hello";
let b = "world";
let c = `Hello ES6 & ${a} ${b} today!`;
console.log(c);

console.groupEnd();

console.groupCollapsed("Using Spread Operator");

//using the spread operator
let arrA = [7, 8, 9];
let arrB = [6, ...arrA, 10];
console.log(arrB);

//using the spread function 2

function printItems(a, b, c) {
  console.log(a, b, c);
}

let pnums = [10, 20, 30];
//printItems(pnums[0], pnums[1], pnums[2]);
printItems(...pnums);

console.groupEnd();

console.groupCollapsed("Destructuring Assignment Array");

//destructuring assignment array
let cdes = [100, 200];
let [cdes0, cdes1] = cdes;
console.log(cdes0, cdes1);

//destructuring assignment array 2
let artists = ["Bounty", "Kartel", "Merciless"];
let [Killer, War_Angel, War_Head] = artists;
console.log(Killer, War_Angel, War_Head);

//destructuring assignment array 3
let artists2 = ["Bounty", " Vybez Kartel", "Merciless"];
let [Killers, ...WarArtists] = artists2;
console.log(Killer, WarArtists);

//destructuring assignment Object 1
let wizard = { magical: true, power: 10 };
// let magical = wizard.magical;
// let power = wizard.power;
let { magical, power } = wizard;
console.log(magical, power);

//destructuring assignment Object 1
let buyEP = false;
let money = 10;

let buyNewEP = { buyEP: true, money: 20 };
({ buyEP, money } = buyNewEP);
console.log(buyEP, money);

//arrow functions
// this.ax ="Simba";

//  function print(){
//    this.ax=50;
//    //console.log(this.ax);
//  }
//  print();

console.groupEnd();

console.groupCollapsed("Map Method");
//map method
let points = [100, 200, 300, 400, 500];

//let addOne = (element)=> {return element + 1};

points = points.map(element => element + 50);
console.log(points);

let isPassing = grade => grade >= 70;
let scores = [65, 75, 90, 48, 99, 70];
let passmark = scores.filter(isPassing);
console.log(`The following were passmarks : ${passmark}`);

console.groupEnd();

//importing modules
console.groupCollapsed("Importing Modules");

import { students, total } from "./students";
import Entity from "./entity";
students.push("Mikey");
console.log(students, total);

console.groupEnd();
//ES6 Classes
console.groupCollapsed("ES6 Classes : OOP");

class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }
  greet() {
    console.log(`Hi im ${this.name} from Mars!`);
  }
}

let pirate = new Hobbit("Pirate", 4.3);
pirate.greet();
console.groupEnd();
