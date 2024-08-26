// function one(){
//     const username ="Nikhil"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website); // it is not defined due to its scope 

//     two()


// }

//         one()

        if (true) {
            const username = "hitesh"
            if (username=="hitesh") {
                const website ="youtube"
                console.log(username+ website);
            }
            // console.log(website); // not defined as the scope is not valid
        }

        // console.log(username);  // o/p -> not defined bcoz of scope of the variable 


        // ++++++++++++++++++++++++++ interesting +++++++++++++++++++

        function addone(num){
            return num + 1
        }

        console.log((addone(5)));


        // addTwo(5) // cannot access 'addTwo' before initialization
        const addTwo = function(num){
            return num + 2
        }
