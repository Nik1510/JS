// this is used for the refence of the current context

const user ={
    username:"Nikhil",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);// o/p --> {} because it is a stand alone function
// but when you use in chrome browser "in console" the o/p changes 
// because it is working on windows engine

// function chai(){
//     console.log(this);
// }
// chai() // o/p --> window object because it is a standalone function


// function chai(){
//     let username ="Nikhil"
//     console.log(this.username);
// }
// chai()



const chai=function (){
    let username = "Nikhil"
    console.log(username);
}
chai()

// -------Arrow function-----


const chai1= () => {
    let username = "Nikhil"
    console.log(username);
}

chai1()



// basic arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));

// --------implict return-------------

// ---------Important--------------
// when you use parantesis we donot use return keyword
// when you use curly braces we use return keyword
// --------------------------------


//  const addTwo =(num1, num2) =>  (num1+num2);

//  console.log(addTwo(3,5));


// const addTwo = (num1,num2) => ({username : "hitesh"})
// console.log(addTwo(3,5));