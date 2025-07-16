// for of 
// ["","",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const item of arr) {
    console.log(item)
}

const greeting = "Hello World!"
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
}

//Map
const map = new Map()
map.set("in","India")
map.set('fr',"France")
map.set('usa',"United States of America")
map.set("in","India")                       //map doesnt print same values

console.log(map)

for(const i of map){                //this returns array
    console.log(i)              
}

for(const [key] of map){           //this will return keys
    console.log(key)             
}

for(const [key,values] of map){    //this will return key and values both
    console.log(key,values)     
}

const myObj = {            //this will give error as obj cant be itterated by for of
    "game1": "GTA 5",
    "game2": "Valorant"
}
for(const [key,values] of myObj){
    console.log(key,values)
}
