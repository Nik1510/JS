const user = {
    username: "Nikhil",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function () {
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
        console.log(this);
    }
};


// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }

    return this
}

const userOne= new User("Nikhil", 12, true)

const userTwo = new User("chai aur code", 11, false)
console.log(userOne.constructor);
// console.log(userOne);
// console.log(userTwo);

// whenever you use new keyword an empty objects is created which is called an instance 
// and the this keyword points to that instance
// when you use new keyword it automatically returns the instance
// so you don't need to write return this in the function
// but if you don't use new keyword then this will point to the global object which is window
// and it will not return anything unless you explicitly write return this
// so it's always recommended to use new keyword when creating instances of a function
// because it makes the code more readable and easier to understand
// and also it helps to avoid confusion between the global object and the instance object



