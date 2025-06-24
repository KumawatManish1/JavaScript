const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros) //add the other array as the next element of the first array

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

const all_heros = marvel_heros.concat(dc_heros) // this method retuen a new array without making changes on the original array
console.log(all_heros) 

//spread
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

//flat
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_arr);


console.log(Array.isArray("Manish")) // return false as it is not an array but a string
console.log(Array.from("Hitesh")) //object which convert the element in array
console.log(Array.from({name:"Manish"})) //returns empty array

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // It helpa A set of elements to include in the new array object.
