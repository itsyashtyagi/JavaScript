// const user = new Object()
const user = {}

user.id = "123zew" 
user.name = "yash"
user.email = "yash@google.com"
user.isLoggedIn = true

// console.log(user);

const regularuser = {
    data : {
        id : 24, 
        name : {
            firstName : "yash", 
            lastName : "tyagi", 
        }
    } 
}

// console.log(regularuser.data.id);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "d"}
const obj3 = {5 : "a", 6 : "b"}

const obj4 = {obj1, obj2, obj3}
const obj5 = Object.assign({}, obj1, obj2, obj3)
const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);

const users = [
    {
        id : 1, 
        name : "yash", 
    }, 
    {
        id : 2, 
        name : "rahul",
    }, 
    {
        id : 3, 
        name : "vivek", 
    }
]

// console.log(users[1].name);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("isLogged"));

const course = {
    name : "node js backend", 
    price : "999", 
    courseInstructor : "vivek"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

// console.log(courseInstructor);

console.log(instructor);
