const name = "Manish"
const repoCount = 9

console.log("My name is "+ name + " and my repo count is "+repoCount)

console.log(`My name is ${name} and my repo count is ${repoCount}`)


const gameName = "Wick_Val_01"
// const gameName = new String('Wick_Val') //more way to create a string

//String methods or functions

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('k'))

const newName = gameName.substring(0,4)
console.log(newName)

const anothername = gameName.slice(-9,4) //only slice allows negative indexes
console.log(anothername)

const newNameOne = "   Manish   "
console.log(newNameOne)
console.log(newNameOne.trim())

const url = "https://ManishKumawat/Manish%20Kumawat"
console.log(url.replace("%20","-"))
console.log(url.includes("Manish"))
console.log(gameName.split("_"))
