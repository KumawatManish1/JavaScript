const accountId = 213134
let accountEmail = "manish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 63463563 //not allowed // cannot assign new value to the const variable

accountEmail = "manishk@yahoo.com"
accountPassword = "52525"
accountCity = "Mumbai"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

 
// if the value is not assigned to a variable then it takes undefined by default 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])