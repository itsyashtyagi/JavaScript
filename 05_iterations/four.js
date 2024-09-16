// for in 

const myObjects = {
    js : "javascript", 
    cpp : "c++", 
    rb : "ruby", 
    dart : "a language for flutter", 
    swift : "swift by apple"
}

for (const key in myObjects) {
    // console.log(`${key} shortcut for ${myObjects[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const str = "Hello World"

for (const key in str) {
    // console.log(str[key]);
}

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const key in map) {
//    console.log(key);
}

// cannot iterate on map by using the forin loop