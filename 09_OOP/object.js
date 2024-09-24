function multiply(num){
    return num*5;
}

multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

function userDetails(name, age){
    this.name = name;
    this.age = age;
}

userDetails.prototype.incrementAge = function(){
    this.age++;
}

userDetails.prototype.printUser = function(){
    console.log(`User name is : ${this.name}`);
    console.log(`Age of user is ${this.age}`);
}

const user1 = new userDetails("yash", 21);
const user2 = userDetails("tushar", 22);

user1.incrementAge();
user1.printUser();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/