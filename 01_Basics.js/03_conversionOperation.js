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