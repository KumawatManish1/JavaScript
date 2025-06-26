//singleton
// Object.create

const sym = Symbol("key1")

//object literals
const jsUser = {
    name : "Manish",
    "full name": "Manish kumawat" ,           //we cant access this with .method we need to use ["fullname"]
 //   sym : "myKey",                        //the datatype will be string not symbol
    [sym]:"myKey",                    //this is the correct way to define a symbol
    age : 23,
    location : "Mumbai",
    email : "maish@google.com",
    isloggedIn : false
}

console.log(jsUser.email)
console.log(jsUser["email"])
//console.log(jsUser.sym)            //this is not a correct way to get the value of a symbol. it will give undefined
console.log(jsUser[sym])           //this is the correct way to get the value of the symbol

jsUser.email = "manish@chatgpt.com"
console.log(jsUser["email"])
//Object.freeze(jsUser)          //this will prevent any changes in the object
jsUser.email = "manish@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greeting2 = function(){
    console.log(`hello JS user , ${this.name}`)
}

//console.log(jsUser.greeting) //this give give undefined as output
console.log(jsUser.greeting())
console.log(jsUser.greeting2())