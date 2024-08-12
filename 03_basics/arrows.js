const user = {
    username : "yash", 
    isLoggedIn : true,

    welcomeMessage : function(){
        // isLoggedIn = false, 
        console.log(`${this.username} welcome to the website and your status is ${this.isLoggedIn}`); 
        // console.log(this);   
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const one = function(){
//     console.log(this);
// }

// one()

const one = () => {
    console.log(this); 
}

// one()

// const addTwo = (num1, num2) => {
//     console.log(num1 + num2);
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username : "yash"});


console.log(addTwo(2, 4))