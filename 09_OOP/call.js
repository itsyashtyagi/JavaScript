function setUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(name, email, password){
    setUserName.call(this, name)

    this.email = email
    this.password = password 
}

const discordUser1 = new createUser("yash", "yash@gmail.com", "1234");
console.log(discordUser1);