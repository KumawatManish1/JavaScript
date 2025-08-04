const user = {
    username: "Manish",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        // console.log(this)
    }
}

console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

//new is called constructor function
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username //this.username is variable and username is the value we give
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

const userOne = new User("Manish", 5 , true)
const userTwo = new User("Sachin",8,false)//this will override the uerOne value so use new keyword to avoid this issue
console.log(userOne.constructor)
console.log(userTwo)

//when we use new keyword 
//it creates an empty object called instance
//constructor function is called by new keyword which has all the arguments and values
//this keyword injects all that arguments and values
//we get everything in the function
