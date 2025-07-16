// for in 

// for in on Object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}

// for in on Array 
const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// for in on maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}