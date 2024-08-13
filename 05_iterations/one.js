// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(index);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     for (let j = 0; j < 10; j++) {
//         console.log(j);   
//     }
// }

let myArray = [1, 3, 5, 6]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// break and continue

// for (let i = 0; i < 10; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(i);   
// }

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue
    }
    console.log(i);   
}