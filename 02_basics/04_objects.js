//object create

// const tinderUser = new Object()// object created 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "adarsh@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Adarsh",
            lastname: "Verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//add object

// const obj3 = {obj1,obj2} 
//Output :-{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1,obj2,obj4)
//Output :- { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1,...obj2,...obj4}
// Output :- { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj3)/

const users = [
    {
        id:1,
        email:"h@gamail.com"
    },
    {
        id:1,
        email:"h@gamail.com"
    },
    {
        id:1,
        email:"h@gamail.com"
    },
]

users[2].email

// console.log(tinderUser)
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser))
//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))
//[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser))
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
