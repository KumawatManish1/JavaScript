// const tinderUser = new Object() //singleton object

const tinderUser = {}             //  non singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Mandy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const someUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Manish",
            lastName : "Kumawat"
        }
    }
}


console.log(someUser.fullname.userFullName.firstName)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1, obj2, obj3}  //this will not combine the objects into a single object
// const obj4 = Object.assign({}, obj1, obj2, obj3) //this will cobine the object properly // if we dont give {} at the start all the other object will be the part of obj1

const obj4 = {...obj1, ...obj2, ...obj3} //this will be used more (spread) instead of Object.assign()

console.log(obj4)


//we can define object inside an array
const myArr = [
    {
        id: "123",
        email: "random@gmail.com"
    },
     {
        id: "123"
    },
     {
        id: "123"
    }
]

console.log(myArr[0].email)


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))  //returns array and also the key walue pair in the array format

console.log(tinderUser.hasOwnProperty("isLogged")) //returns true if property is present inside the object else return false