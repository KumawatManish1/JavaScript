//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}$#@%`
//     }
//     capitlizeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const myInfo = new User("Manish","manish@google.com", "1234")
// console.log(myInfo.encryptPassword())
// console.log(myInfo.capitlizeUsername())

//behind the screen

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}@#$%^&`
}
User.prototype.capitalizeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user1 = new User("manish","m@meta.com","1234")
console.log(user1.encryptPassword())
console.log(user1.capitalizeUsername())