
function sayMyName(){
    console.log("A");
    console.log("d");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result of two number addition", result)

function loginUserMessage(username = " Anonymuous"){
    if(!username){
        console.log("please enter a username");
        return 
    }

    return `${username } just logged in.`
}

// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1,val2, ...num1){
    return val1
}
// console.log(calculateCartPrice(200,400,100,600))

const user = {
    username: "adarsh",
    price: 77
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 500, 1000]));