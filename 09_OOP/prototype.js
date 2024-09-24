let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer", 
    spiderman : "spiderman", 

    getSpiderPower: function(){
        console.log(`Spidderman power is ${this.spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log("Created by yash tyagi");
}

Array.prototype.hey = function(){
    console.log("The array is called");
}

// heroPower.yash();
// myHeros.yash();
// myHeros.hey();
// heroPower.hey();

// inheritance

const User = {
    name : "yash", 
    email : "yash@gmail.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport,
}

// console.log(TASupport.isAvailable);

Teacher.__proto__ = User;

// moder syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let myName = "yash     ";
let mychannel = "youtube     ";

String.prototype.trueLength = function(){
    console.log(this.length);
    console.log(this.trim().length);
}

myName.trueLength();
"tyagi    ".trueLength();