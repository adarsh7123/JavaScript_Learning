//Singleton
//Object.Create karte hai

//object literals

const mySym = Symbol("key1")

const JSUser = {
    name :"Adarsh",
    "full name" : "verma Adarsh",
    [mySym]: "Key",//symbol likhna hoto
    age : "20",
    location: "Ahmedabad",
    email: "adarsh@gamail.com",
    isLoggedIn:false,
    lastLoginDays: ["Mondays","Tuesday"]
}

// console.log(JSUser.email)
// console.log(JSUser["email"]) //yeah tarike se bhi output la sakte hai
// console.log(JSUser["full name"])
// console.log(JSUser[mySym]) //agar symbol ko call karna ho to

JSUser.email = "adarsh@google.com"
// Object.freeze(JSUser)
JSUser.email = "qwerty@qwerrt"
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("hello JS user");
}
JSUser.greetingTwo = function(){
    console.log(`hello JS user ,${this["full name"]} `);
}

console.log(JSUser.greeting())
console.log(JSUser.greetingTwo())