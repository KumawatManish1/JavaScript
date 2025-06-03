const score = 100
console.log(score)

const balance = new Number(550)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const newNum = 23.6436
console.log(newNum.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // give commas accotding to US standards
console.log(hundreds.toLocaleString('en-IN')) //indian standards


/***************************MATHS***********************************/

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(3,64,2,42))
console.log(Math.max(3,64,2,42))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min)