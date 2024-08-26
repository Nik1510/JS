const coding = ["js" , "ruby", 'java', 'pyton', 'cpp']

const values = coding.forEach( (item) =>{
    // console.log(item);
    return;
})

// console.log(values); // for this example we can say forEach loop doesnot return any value
// therefore the o/p-> "Undefined"
 


// to solve the above problem the developer has introduce 
// filter map() method which returns a new array with the results of applying the provided function on every element


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num>4)

console.log(newNums);


// const newNums1 = myNums.filter((num) => {
    // return num>4; // here we have to use return keyword 
// })
// console.log(newNums1);





// ---Another example------


// const newNums = []

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


//  an real life examle 

const books =[
    {title: "book1", genre:'Friction',publish:1981,
    edition:2004},
    {
        title: "book2",genre:'Non-Friction',publish:1982,
        edition:2005
    },{
        title: "book3",genre:'Histroy',publish:1983,
        edition:2006
    },{
        title: "book4",genre:'Non-Friction',publish:1984,
        edition:2007
    },
    {
        title: "book5",genre:'Science',publish:1985,
        edition:2008
    },
    {
        title: "book6",genre:'Friction',publish:1986,
        edition:2009
    },
    {
        title: "book7",genre:'Histroy',publish:1987,
        edition:2010
    },
    {
        title: "book8",genre:'Science',publish:1988,
        edition:2011
    },
    {
        title: "book9",genre:'Non-Friction',publish:1989,
        edition:2012
    },
    {
        title: "book10",genre:'Non-Friction',publish:1990,
        edition:2013
    }
]
// filter books by genre
// const frictionBooks = books.filter((bk)=>bk.genre==='Histroy')

// console.log(frictionBooks);

// const frictionBooks1= books.filter((bk) =>{
//     return bk.publish>=1985 && bk.genre==='Histroy'
// })

// console.log(frictionBooks1);