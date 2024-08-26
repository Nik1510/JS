
// why we don't we var
// because of the scope of the variable 
// var c= 300;
// if you print c after if statement "within the if block" 
// you will see scope of the variable 'VAR' aviable outside of the block

let d=400; // here d is global variable 
if(true){
    let a=10; // a is a local variable 
    const b = 20; // b is a local variable 
    var c=30; // here c value is changed and its scope is also outside the if block so we don't use var 
    let d= 3; // d is a loacal variable 
    console.log(`Inner value of c is ${c}`);
    console.log("INNER:",d); // output 3

}


// console.log(a);// prints not defined
// console.log(b);// prints      not defined
console.log(c); // prints 30
console.log(d); // prints 400