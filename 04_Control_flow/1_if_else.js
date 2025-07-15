//if
const isLoggedIn = true
if(isLoggedIn){
    console.log("User has logged in")

}

if(2 == "2"){
    console.log("executed")
}

if(2 === "2"){
    console.log("executed1")  // === checks both value and type ie why it is not executed
}


const temp = 45
if(temp<55){
    console.log("less than 55")
}
console.log("Outside the conditional statement")
// <, >, <=, >=, ==, !=, ===

// const money = 1000
// if(money>500) console.log("test"), console.log("test1"); //we doesnt need {} we can just write console after the condition and also add more consoles by adding ,


//nested if else
const money = 800
if(money<500){
    console.log("less than 500")
} else if(money<750){
    console.log("less than 750")
}else if(money<900){
    console.log("less than 900")
}else{
    console.log("greater than 1000")
}

// && ||
const isloggedin = true
const hasDebitCard = true
const isLoggedWithGoogle = false
const isLoggedWithEmail = true
if(isLoggedIn && hasDebitCard){
    console.log("Can buy course.")
}
if(isLoggedWithGoogle || isLoggedWithEmail){
    console.log("User can login")
}
