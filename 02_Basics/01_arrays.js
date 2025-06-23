//Array
const myArr = [0,1,2,3,4,5]
const myHeros = ["Ironman","Hulk","Thor"]

const myArr2 = new Array(1,2,4,5,6,7)


//console.log(myArr[1])

//Array Methods
myArr.push(6)                 //Append the value at the end of the array
myArr.push(7)

myArr.pop()                   //Removes the last element of the array

myArr.unshift(9)              //Add the elemnt at the start of the array
myArr.shift()                 //removes the element at the start of the array

//console.log(myArr.includes(9))  //returns boolean values that the lement exists in array or not
//console.log(myArr.indexOf(4))    //returns the index of the element

// console.log(myArr);

const newArr = myArr.join()    //returns the string type
// console.log(myArr)
// console.log(newArr)


console.log("A", myArr)

const myn1 = myArr.slice(1,3)  //slice doesnt change the original array
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3) //splice changes the original Array
console.log(myn2)
console.log("C",myArr)



