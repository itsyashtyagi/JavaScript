function myName(){
    console.log("Y");
    console.log("a");
    console.log("s");
    console.log("h");
}

// myName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 3)

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    // console.log(number1 + number2); // Any thing after the return statement will not be executed
}

// console.log(addTwoNumbers(3, 5));

function loginUserMessage(username = "sam"){
    if(username){
        return `${username} is Logged In`;
    }
    return `Please enter the username`;
}

// console.log(loginUserMessage("Yash"));

function calculateCartPrice(num2, num3, ...num1){ // ... => rest operator
    return num1;
}

// console.log(calculateCartPrice(100, 200, 300, 500, 1000));

const user = {
    username : "yash", 
    isLogged : true
}

function userDetails(userObj){
    return `The name of the user is ${userObj.username} and the status of login is ${userObj.isLoggedIn}`;
}

// console.log(userDetails(user));

// console.log(userDetails({
//     username : "yash", 
//     isLoggedIn : true
// }));

const myNewArray = [100, 200, 400]

function calculateArray(anyArray){
    console.log(anyArray[1]);   
}

// calculateArray(myNewArray)
calculateArray([100, 300, 500, 1000])
