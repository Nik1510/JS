class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCoures(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new  Teacher("chai", "chai@teacher.com", "123")

chai.addCoures()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai);// o/p -> false 
console.log(chai === Teacher);// o/p -> false 
console.log(chai instanceof User);// o/p -> true