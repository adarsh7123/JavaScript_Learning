

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task me kaam aata hai 
    //     // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000)

})


promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log('asyn Task 2 ');
        resolve()
    },1000);

}).then(function(){
    console.log("Async 2 resolved");

})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username:"Adarsh", email:"adarsh@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
            if(!error){
            resolve({username:"Adarsh", email:"adarsh@gmail.com"});}
            else{
                reject("ERROR: Something went wrong")
            }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.email
}).then((email)=>{
  console.log(email);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('the promise is either resolved or rejected'))


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"js advance topics", password:"123"})
        }
        else{
            reject("ERROR: Js went wrong")
        }
        
    },1000)
})
//async await here 

async function consumePromiseFive(){
    try{
        const response =  await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()


//fetch data with async await

async function getAllUsers(){
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
       const data  = await response.json()
         console.log(data);
    }
    catch(error){
        console.log("E: ", error);
    }
}
 getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((data)=>{
     return data.json();
}).then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error); 
}).finally(()=>console.log("finally"))


/* 



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
   return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


*/