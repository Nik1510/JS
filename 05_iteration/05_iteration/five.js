// for each loop 
const coding = ["js" , "ruby", 'java', 'pyton', 'cpp']

// for each function is callback function 
// so we donot write name of the function
// 
coding.forEach(function (item){
    // console.log(item);
})


// coding.forEach((item) =>{
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



coding.forEach((item, index ,arr)=>{
    console.log(item , index, arr);
})


const myConding=[
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myConding.forEach((item)=>{
    // console.log(item.languageName);
})