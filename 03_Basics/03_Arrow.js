const user = {
    userName : "Manish",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome tom the website`)
        console.log(this)  //gives the current context
                           //it only works on object not on functions
    }
}
// user.welcomeMessage()
// user.userName = "Sachin"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let userName = "manish"
//     console.log(this.userName) //it doesnt work on functions
// }
// chai() //returns undefined


// const chai = function(){
//     let userName = "Manish"
//     console.log(this.userName)
// }


//Arrow function
// chai = () => {
//     let userName = "Manish"
//     console.log(this.userName)
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(5,7))


//implicit return : doesnt need return keyword and curly parenthesis
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) //if we use {} then return keyword is neccessary and if we use () then return keyword is not necessary
const addTwo = (num1,num2) => ({username:"Manish"})
console.log(addTwo(5,9))


//Ways to write function 
const myArr = [2,466,45,332]
// myArr.forEach(funtion () {})
// myArr.forEach(() => {})
// myArr.forEach(() => ())