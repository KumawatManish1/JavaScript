// Stack(stores Primitive)  => Gives copy ie why it doesnt change the value of the first variable

 let myName = "Manish"
 let anothername = myName
 anothername = "Yogesh"
 console.log(myName)
 console.log(anothername)

// Heap(stores Non-Primitive) => Gives reference ie why it changes the value of the original variable if changes made in the new variable
myObj = {
    name:"Manish",
    age : 23
}

myObj1 = myObj

myObj1.name = "Sachin"

console.log(myObj)
console.log(myObj1)