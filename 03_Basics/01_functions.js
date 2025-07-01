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