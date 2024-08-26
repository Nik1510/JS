// Immediately Invoked Function Expression (IIFE)

// why do we use it ?
// 1. To avoid polluting the global namespace
// 2. To create a private scope for variables and functions

// if you have to write IIFE 
// you have to include semi_colon ";" between the two IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);

})();
// here we used ";" to end the function


((name) =>{
    // inmaned IIFE
    console.log(`DB CONNECTED TWO${name}`);
})(' Nikhil')