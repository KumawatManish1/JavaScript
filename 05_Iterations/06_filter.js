const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })
// console.log(value)


//filter
// we can return with the help of filter unlike forEach
const nums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = nums.filter((num) => num>4) //if we dont use scope we dont need to use the return keyword

// const newNums = nums.filter((num) => { //if we use scope then we need return 
//     return num>4
// })

//we can use do same with foreach but it is little complicated than the filter
const newNums = []
nums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBook = books.filter((bk) => bk.genre === "Science" )
// const userBook = books.filter((book) => book.publish > 2000)
// const userBook = books.filter((book) => {return book.publish > 2000}) //needed return because we had scopes

const userBook = books.filter((book)=>{
    return book.publish >= 1995 && book.genre === "History"
})

console.log(userBook)