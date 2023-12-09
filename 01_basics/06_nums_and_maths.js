const score = 299
// console.log(score)

const balance = new Number(100)
// console.log(balance); // Number:100

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//100.0
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//123.9
// console.log(otherNumber.toPrecision(2));//1.2e+2

const price =10000000000

// console.log(price.toLocaleString('en-IN'))//10,00,00,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-120));
// console.log(Math.round(7.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(2,1,3,5));
// console.log(Math.max(8,3,4,9));
// OUTPUT
// Object [Math] {}
// 120
// 7
// 5
// 4
// 1
// 9

console.log(Math.random());//btw 0 to 1
console.log(Math.random()*10+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min); //used in dice game
