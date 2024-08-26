class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        return Math.floor(Math.random()*10)
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId());



class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("email","i@phone.com")
