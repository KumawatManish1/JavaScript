class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //we dont need call(this, ) haha!
        this.email = email
        this.passowrd = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const myInfo = new Teacher("Medha", "medha@gmail.com","1234")
console.log(myInfo.addCourse())

const myInfo2 = new User("Shruti")
// console.log(myInfo2.addCourse()) //willgive error
console.log(myInfo2.logMe())