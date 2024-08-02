const accountId = 123
let accountEmail = "yash@google.com"
var accountPassword = "1297"
accountCity = "Ghaziabad"
let accountHolderName ;

// accountId = 1234 // Not allowed in Javascript

accountEmail = "yash@microsoft.com"
accountPassword = "1267"
accountCity = "Delhi"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountHolderName]);

/*
Prefer not to use the var because of functional scope and block scope problem. Always use the const and let keywords
*/