
// const userLoggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("Temperature is less than 50");
// }
//  else{
//     console.log("Temperature is greater than 50");
//  }

// <, > , <= , >= , != , !, ==, ===

// if(temperature < 50) console.log("Temperature is less than 50");

const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 1000){
//     console.log("less than 1000");
// } else if(balance < 1250){
//     console.log("less than 1250");
// } else {
//     console.log("greater than 1250");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In");
}