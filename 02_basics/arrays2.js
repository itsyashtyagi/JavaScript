const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const another_array = [...marvel_heros, ...dc_heros]
// console.log(another_array);

const newArray = [1, 2, 4, [2, 5, 8, ], [2, 3, [3, 7, 0, 15]], 5]
const real_newArray = newArray.flat(Infinity)
// console.log(real_newArray);

console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"));
console.log(Array.from({name : "Yash"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
