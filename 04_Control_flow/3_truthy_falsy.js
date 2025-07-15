const userEmail = []

// if(userEmail){
//     console.log("Got user Email")
// }else{
//     console.log("Dont have user email")
// }

// Falsy Values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Turthy values 
// true, "0", 'false', " ", [], {}, function(){} 


// to check that array is empty
if(userEmail.length === 0){
    console.log("Array is Empty")
}

//to check object is empty
const emptyObject = {}
if(Object.keys(emptyObject).length ===0){
    console.log("Object is empty")
}

false == 0         //gives true
false == ''       //gives true
0 == ""           //gives true


