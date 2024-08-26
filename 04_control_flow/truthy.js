// const userEmail ="Nikhil@gmail.com"
const userEmail =false
// const userEmail =[]
if (userEmail) {
    console.log("Got User email ");
} else{
    console.log("No User email ");
}

// falsy value -->

// false ,0, -0, BigInt  0n, "",null , undefined ,NaN

// truthy value -->
//  "0", 'false' , " ", [], {}, function(){}

// if(userEmail.length ==0){
//     console.log("Array is Empyt");
// }


const emptyObj ={}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is Empty");
}
// --------------  General Knowlege  -------------

// false == 0 // o/p --> true 
// false === 0 // o/p --> false
// false == '' // o/p --> true
// false === '' // o/p --> false
// 0 == '' // o/p --> true 
// 0 === '' // o/p --> false


// Nullish coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 // o/p--> 5
// val1 = null ?? 10 // o/p-->10
//  val1 = undefined ?? 10  // o/p-->10
// val1 = null?? 10??15  // o/p-->10



console.log(val1);


//  Terniary Operator 

// condition ? true :false


const iceTeaPrice =100
iceTeaPrice >= 80? console.log( "Ice Tea is Expensive"): console.log("Ice Tea is Affordable");
