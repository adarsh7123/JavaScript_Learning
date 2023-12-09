//primitive 
//7 type main : string , number, boolean, null , undefined, symbol, BigInt

const name = "Adarsh"// string
const score = 100 //number
const score1 = 100.23 //number
const isValue = false //boolean
const tension = null
let future //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// const BigInt = 1236728782989201910n

//non primitive (Refernce)
// Array, Objects, Functions

//Array
const heros = ["salman", "Dhoni", "Modi"]

//Objects
let details = {
    Name: "Adarsh",
    Age: 20, 
    Country: "INDIA"
}

const myFunction = function(){
    console.log("datatypes Summary");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".*/