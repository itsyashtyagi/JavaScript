class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(val){
        this._email = val;
    }

    get password(){
        return `${this._password}@$690!~`;
    }

    set password(val){
        this._password = val;
    }

}

const user1 = new User("yash", "yash@gmail.com", "1234");
console.log(user1.password);
console.log(user1.email);
console.log(user1._email);
