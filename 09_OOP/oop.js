const user = {
    username : "yash", 
    loginCount : 9, 
    signedIn : true, 

    getUserDetails : function(){
        // console.log("The user details are here...");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}

// let name = "yash tyagi";

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username , loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // Optional
}

const userOne = new User("yash", 6, true);
const userTwo = new User("tushar", 7, false);

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
