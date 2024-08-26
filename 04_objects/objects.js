// objects can be defined as literaals and constructor
// functions. Literals are objects that are created using the object literal
// syntax. Constructor functions are functions that are used to create objects.
// Both literals and constructor functions can be used to create objects, a
// difference is that literals are created at runtime and constructor functions
// are created at compile time.

// singletons

// object literals
// Object.create

// objects literals

const mySym = Symbol("key1") // this is a symbol 
// but when you print this it will be a "String"
// when you use it as a symbol we have to use a "[]"
// i.e. [mySyn]


const JsUser ={
    name: 'John',
    "full name":'John mark',
    [mySym]:"mykey1",
    age: 30,
    location: "kolkata",
    email:"John@vitbhopal.ac.in",
    sayHello(){
        console.log('Hello');
        }
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email= "John@chatgpt.ac.in";
// console.log(JsUser.email);
// Object.freeze(JsUser);
JsUser.email= "John@microscopt.ac.in";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS user');
}

console.log(JsUser.greeting);