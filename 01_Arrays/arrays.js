// arrays

const myArrays = [0, 1, 2, 3, 4, 5];

// console.log(myArrays[1]);
const myHeors =["shaktiman","naagraj"];

const myArrays2= new Array(1,2,3,4)

// Arrays methods

// myArrays.push(6);
// myArrays.push(7)
// myArrays.pop();

// myArrays.unshift(9);
// myArrays.shift()


// console.log((myArrays.includes(9)));
// console.log(myArrays.indexOf(3));


// const newArr = myArrays.join();

// console.log(typeof newArr);// its type is converted into String

// console.log(myArrays);


// slice , splice 


console.log("A",myArrays);

const myn1 = myArrays.slice(1,3)

console.log(myn1);
console.log("B",myArrays);


const myn2 = myArrays.splice(1,3);
console.log("C",myArrays);
console.log(myn2);