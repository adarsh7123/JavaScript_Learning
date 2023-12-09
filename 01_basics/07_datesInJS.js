//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.getFullYear());
// console.log(myDate.toDateString());
//output
/*2023-12-09T09:56:25.659Z
Sat Dec 09 2023 09:56:25 GMT+0000 (Coordinated Universal Time)
12/9/2023, 9:56:25 AM
12/9/2023
9:56:25 AM
2023-12-09T09:56:25.659Z
2023
Sat Dec 09 2023*/

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 15, 3,57)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp); //in millisecond
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());//day 

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('GMT 05:30', {
//     weekday: "long",
    
// })
