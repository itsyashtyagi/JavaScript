// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getAllusers();

fetch("https://api.github.com/users/itsyashtyagi").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})