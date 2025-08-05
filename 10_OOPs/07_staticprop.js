class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const manish = new User("Manish")
console.log(manish.createId())