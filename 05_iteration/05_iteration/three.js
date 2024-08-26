//  for of 

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4 ,5]

// for (const num  of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps 


// defination -->
// The "Map" object holds key-value pairs
//  and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// map.set('I',"France")
// map.set('IN',"India")// one key for variable only

// for (const key of map) {
//     console.log(key);
// }

// output--->
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// output -->
//  ap(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }


// for (const [key,value] of map) {
//     console.log(key, ':-', value );
// }

// console.log(map);


const myObject ={
    game1:"NFS",
    game2:"Spiderman",

}

// for (const [key,value] of map) {
//     console.log(key, ':-', value );
// }
  /// objects are not  iteravle 
  for (const key in myObject) {
   console.log(key);
}