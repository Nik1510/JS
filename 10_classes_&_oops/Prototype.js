// let myName = "Nikhil       "
// let mychannel = "chai       "
// we need to create a method called truelength
// which will return the actual length of the string

// console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor: "lightning",
    spiderman: "web",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// heroPower.hitesh()

// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance 

const User ={
    name: "Nikhil",
    email: "nikhil@gmail.com",

}
const Teacher ={
    makeVideo:true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

// how to create your own function if not avaialble in Javascipt 
// here is an example for that :--

let anotherUserName = "ChaiAurCode          "

String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.truelength()

"hitesh".truelength()
"iceTea".truelength()
