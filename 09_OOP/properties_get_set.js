function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(val) {
            this._email = val;
        }
    })

    Object.defineProperty(this, "password", {
        get : function(){
            return this._password.toUpperCase();
        },
        set : function(val) {
            this.password = val;
        }
    })
}

const user1 = new User("yash@gmail.com", "abc");
console.log(user1.password);
