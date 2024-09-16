const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (val, index, arr) => {
//     console.log(val, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript", 
        languageFileName : "js"
    },
    {
        languageName : "java", 
        languageFileName : "java"
    },
    {
        languageName : "dart", 
        languageFileName : "dart"
    },
    {
        languageName : "c++", 
        languageFileName : "cpp"
    }, 
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})