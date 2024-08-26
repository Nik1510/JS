//          "REDUCE " KEYWORD 

const myNums= [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, current) {
//     console.log(`acc : ${acc} and currentValue is :${current}`);
//     return acc + current;
// },3)
// console.log(myTotal);

// same thing but in another package that is `Arrow Function`


console.log(myNums.reduce((acc, current) => acc + current, 0)); // Output: 6

const shoppingCart =[
    {
        product: 'apple',
        price: 10
    },{
        product: 'banana',
        price: 20
    },{
        product: 'orange',
        price: 30
    },{
        product: 'grape',
        price: 40
    },{
        product: 'mango',
        price: 50
    },{
        product: 'pineapple',
        price: 60
    },{
        product: 'watermelon',
        price: 70
    }
]

const price = shoppingCart.reduce( (acc,item) => acc+item.price,0);

console.log(`Price to Pay is ${price}`)