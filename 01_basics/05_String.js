const name = "Adarsh"
const repo = 7
// console.log(name +" "+ repo + " Github") Wrong tarika 

// console.log( `hello my name ${name} and my repo count is ${repo} on Github`);

const gameName = new String ("adarsh-T20-League")

console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.length)
console.log(gameName.substring(0,5))
console.log(gameName.slice(-7,-1))

const find = /[A-Z]/;
console.log(gameName.search(find))


const newStringOne = "   Engineering    "
console.log(newStringOne);
console.log(newStringOne.trim());//trimStart and trimEnd

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20","_"))

console.log(url.includes('cricket')) //false

console.log(gameName.split('-')) //split where "-" and give array of string 
