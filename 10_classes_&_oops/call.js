function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, passsword){
    SetUsername.call(this,username)// very important thing 

    this.email = email
    this.passsword = passsword
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);