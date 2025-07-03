function sayMyName(){
    console.log("M")
    console.log("a")
    console.log("n")
    console.log("i")
    console.log("s")
    console.log("h")
}

sayMyName()

// function addTwoNumber(num1,num2){  //this is not the right appraoch to get the value
//     console.log(num1+num2)
// }

function addTwoNumber(num1,num2){
    return num1+num2
}

const result = addTwoNumber(4,3)

console.log(`Result: ${result}`)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))



function calculateCartPrice(val1, val2, ...num1){      //REST OPERATOR => ...num1
    return num1;
}

console.log(calculateCartPrice(300,200,150,750))

const user = {
    userName: "Manish",
    price : 199
}

//for object handling using functions

function handleObject(anyObject){
    console.log(`The username is ${anyObject.userName} and the price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    userName: "Sachin",
    price: 399
})

//for array handling using Functions
myNewArray = [100,300,256,444]

function returnSecondValue(takeArray){
    return takeArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,400]))