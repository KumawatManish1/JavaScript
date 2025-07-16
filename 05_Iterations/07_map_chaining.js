const myArr = [1,2,3,4,5,6,7,8,9,10]

// const newArr = myArr.map((num)=> num+10)//dont need return as we didnt used scope

// const newArr = myArr.map((num) => { //needed return as we used scope
//     return num+10
// })

const newArr = myArr
                .map((num) => num * 10)
                .map((num) => num + 1) //get the value of num which after the first map
                .filter((num)=> num>=40)
console.log(newArr)