class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    teacherDetails(){
        console.log(`The name of the user is : ${this.username} and its email is : ${this.email}`);
    }
}

const user1 = new Teacher("yash", "yash@gmail.com", "12324");

const user2 = new User("yash tyagi");

user1.teacherDetails();
user1.logMe();

user2.logMe();

console.log(user1 instanceof User);