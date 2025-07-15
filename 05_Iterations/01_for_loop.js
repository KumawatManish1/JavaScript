// for 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(variable declaration; CSSConditionRule; increment/decrement){
//     console.log()
// }

// for(let i =1; i<=10; i++){
//     console.log(i)
// }

// for(let i =1; i<=10; i++){
//     if(i==5){
//         console.log("5 is the best number")
//     }
//     console.log(i)
// }

// for(let i = 0;i<=10;i++){
//     console.log(`outer loop value: ${i}`)
//     for(let j=0; j<=10;j++){
//         console.log(`inner loop value: ${j} and inner loop values: ${i}`)
//     }
// }

for(let i =1; i<=10;i++){
    //console.log(`Table of ${i}`)
    for(let j=1;j<=10;j++){
        //console.log(`${i} x ${j} = ${i*j}`)
    }
}

const myarray = ["Batman", "Superman", "Flash", "Wonder-Woman", "AquaMan", "Cyborg"]
for(let i = 0; i<myarray.length;i++){
    // console.log(myarray[i])
}

//break
for(let i =1; i<=20;i++){
    if(i==5){
        // console.log("5 detected")
        break
    }
    // console.log(i)
}

//continue
for(let i = 1; i<=20;i++){
    if(i==5){
        console.log("5 Detected")
        continue
    }
    console.log(i)
}
