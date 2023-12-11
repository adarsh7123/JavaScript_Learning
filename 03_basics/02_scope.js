// var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20

    // console.log(`${c} , ${a}, ${b}`)
}

//  console.log(`${c} , ${a}`)

function one(){
    const username = "adarsh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one ()

if (true) {
    const username = "adarsh"
    if (username === "adarsh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

// console.log(addTwo(5)) 
// not run because ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))
