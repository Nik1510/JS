//  very important 

//  JavaScript Excution Context

// there are three types of excution context :-->
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context


// {} --> Memory creation Phase 
//  --> Code Execution Phase
//  --> Memory Reclaimation Phase


// lets understand with the help of an example

let val1= 10;
let val2= 5;
function addNum(num1,num2){
    let sum = num1 + num2;
    return sum;
}

let result = addNum(val1,val2)
let result2 = addNum(10,2)