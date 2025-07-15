// Nullish Coalescing Operator(??): null  undefined
// var1 = 5 ?? 10
// var1 = null ?? 15
// var1 = undefined ?? 22
var1 = null ?? 10 ?? 20       //it will always assign the first non empty value
console.log(var1)

//Ternary Operator
// condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")