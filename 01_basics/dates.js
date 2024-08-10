let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); // Object

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date("2023-01-23")
let myCreateDate = new Date("01-12-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getDate());
// console.log(myCreateDate.getMonth());


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

let newDateFormat = newDate.toLocaleString('default', {
    weekday : "long", 
})
console.log(newDateFormat);
