function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called")   
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const myInfo = new createUser("Manish","Manish@gmail.com","1234")
console.log(myInfo)