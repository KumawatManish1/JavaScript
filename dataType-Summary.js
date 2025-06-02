// based on how data is stored in memory and how can we access the data , data is divided into Primitive and Non-Primitive 

//Primitive DataType

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const name = "Manish"
const num = 23
const anotherNum = 23.5
const isLoggedIn = true
const temp = null
let city;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNum = 542389572938578092n

//Reference (Non-Primitive)

// Array, Objects, Functions

const Avengers = ["Ironman", "Captain America", "Hulk", "Thor", "Balck Widow", "Hawkeye"]

let myDict = {
    name: "Manish",
    age: 23
}

const myFunc = function(){
    console.log("Hello World")
}