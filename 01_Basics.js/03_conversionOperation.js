let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let scoreInNumber  = Number(score)
console.log(typeof scoreInNumber)
console.log(scoreInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// 1 => true; 0 => false
// "" => false; "Manish" => true

let someNumber = 23
let stringofsomeNumber  = String(someNumber)
console.log(stringofsomeNumber)
console.log(typeof stringofsomeNumber)



/**************************************OPERATION***************************** */
let someNum = 33
let negNum = -someNum
console.log(negNum)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%3)

let str1 = "Hello"
let str2 = " Manish"
let str3 = str1 + str2
console.log(str3)

console.log(1 + "2")      //12
console.log("1" + 2)      //12
console.log("1" + 2 + 2)  //122
console.log(1 + 2 + "2")  //32

console.log(+true)
console.log(+"")

let gameCounter = 100
gameCounter++               //prefix increment
++gameCounter               //postfix increment
console.log(gameCounter)
