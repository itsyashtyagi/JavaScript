const User = {
    _email : "yash@gmail.com", 
    _password : "abc", 

    get email(){
        return this._email.toUpperCase();
    }, 

    set email(val){
        this._email = val;
    }

}

const user1 = Object.create(User);
console.log(user1.email);