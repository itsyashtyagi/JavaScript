// for of

const arr = [1, 2, 3, 4, 5]

for (const item of arr) {
    // console.log(item);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps 

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const [key, value] of map) {
    // console.log(key, ' :- ', value);
}

// Objects

const myObject = {
    name1 : "yash tyagi", 
    name2 : "tushar agarwal"
}

for (const [key, value] of myObject) {
    // console.log(key, ' :- ', value); 
}

// cannot iterate on the objects by using the forof loop