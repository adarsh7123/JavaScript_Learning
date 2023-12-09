//arrays

const myArr = [1,2,3,4,"adarsh",'3']

const myStringArray = ["ab","aab","asd"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[1]);

// Array methods

// myArr.push(6) //backward push 6 in array
// myArr.push(7)
// myArr.pop() //pop from backward

// myArr.unshift(9) // 9 place at first position and all element shifted right side

// myArr.shift() //shift left side

// console.log(myArr.includes(9)); //give boolean value
// console.log(myArr.indexOf(3)); // give actual index starting from 0


const newArr = myArr.join()
//converted in string 
console.log(myArr); //give array as output [ 1, 2, 3, 4, 'adarsh', '3' ]
console.log( newArr); //give string type output 1,2,3,4,adarsh,3


// slice, splice difference

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr); //slice no change in array and not include index 3 only include 1 2

const myn2 = myArr.splice(1, 3)
console.log(myn2); //splice include 3 index also
console.log("C ", myArr); // splice change in array remove splice elements
// B  [ 1, 2, 3, 4, 'adarsh', '3' ]
// [ 2, 3, 4 ]
// C  [ 1, 'adarsh', '3' ]