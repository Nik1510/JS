const marvel_heros =["thor", "Ironman","spiderman"]
const dc_heors=["superman","flash","batman"];

// marvel_heros.push(dc_heors)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeors = marvel_heros.concat(dc_heors);
// console.log(allHeors);


// const all_new_Heors= [...marvel_heros,...dc_heors]

// console.log(all_new_Heors);

// const another_array= [1, 2, 3,[4, 5, 6], 7,[6,7,[4,5]]]

// const real_another_array= another_array.flat(Infinity);
// console.log(real_another_array); // [1, 2, 3, 4,

console.log((Array.isArray("Nikhil")))
console.log(Array.from("Nikhil"));
console.log(Array.from({name:"Nikhil"})); // interseting thing 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));