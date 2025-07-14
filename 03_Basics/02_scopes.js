var c =300
let a = 200
if(true){
    let a = 10
    const b = 20
    var c = 30               //var creates problems
}

console.log(a)
// console.log(b)
console.log(c)


function one(){
    const userName = "Manish"

    function two(){
        const website = "Youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
one()


if(true){
    const userName = "Manish"
    if(userName === "Manish"){
        const website = " youtube"
        console.log(userName + website)
    }
    // console.log(website)

}
// console.log(userName)


console.log(addone(5))
function addone(num){
    return num+1
}


addtwo()
const addtwo = function(num){
    return num+2

}