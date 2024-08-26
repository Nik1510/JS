// date is a class 
let myDate = new Date();
// here we created an instance class of date 

// -------Feature of Date class-----------------
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// ------------------------------------------------


console.log(typeof myDate);
// => in this we can see it is an object of the class "Date"
// let myCreatedDate = new Date(2023,0,23);// --> o/p =year, date , month 
// let myCreatedDate= new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

console.log(Date.getDay());