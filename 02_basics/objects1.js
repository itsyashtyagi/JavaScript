// singleton 
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Yash", 
    "full name" : "Yash Tyagi", 
    age : 21, 
    [mySym] : "keys", 
    city : "Ghaziabad", 
    email : "yash@google.com", 
    isLoggedIn : true, 
    lastLoginDays : ["Saturday", "Monday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// console.log(typeof JsUser.mySym);

JsUser.email = "yash@microsoft.com", 
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "yash@ai.com", 
JsUser.name = "yash tyagi"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World");
}

JsUser.greetingTwo = function(){
    console.log(`The email id ${this.email} and the full name is ${this["full name"]}`); 
}

JsUser.greeting()
console.log(JsUser.greetingTwo());
