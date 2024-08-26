const myNumber =[1,2, 3, 4,5 , 6, 7, 8, 9, 10]


// new method name map :- does the same work 
// map method returns a new array with the results of applying the provided function on every element in the
// calling array.
// map method does not change the original array
// const doubleNumbers = myNumber.map((num)=> num * 2)
// console.log(doubleNumbers)

// const newNums =myNumber.map((num) => num+10)
// console.log(newNums);


const newNums = myNumber
                        .map( (num)=> num*10 )
                        .map( (num) =>num+1 )
                        .filter( (num) => num >= 40)
                        .map((num)=>num*10)
console.log(newNums);