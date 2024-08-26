// function with objects 
// suppose you are building shopping cart machine and you don't 
// know how many items are there so we use-->

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(10)); // output  10

// when you pass many parameter for e.g.
// console.log( calculateCartPrice(200, 400));// output 200

// to solve this problem we use 
// rest parameter
// rest parameter is denoted by ...
// it is used to pass multiple arguments to a function
// it is an array


// function calculateCartPrice(...num1){
//     return num1;
// }  // output [200,300,400]

// one interview level details
function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// in this case "val1=200", "val2=300", num1=[500,2000]

// console.log(calculateCartPrice(200,300,500,2000));

const user ={
    username :"Nikhil",
    price:200
}
function handleObject(anyObjects){
    console.log(`Username is ${anyObjects.username} and price is ${anyObjects.price}`);
}

// handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));