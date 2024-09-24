const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function (){
        console.log("Async task 1")
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise 1 consumed");
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username : "yash", email : "yash@gmail.com"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    let error = true;
    setTimeout(() => {
        if(!error){
            resolve({status : "No Error"});
        } else{
            reject({status : "Error Found"});
        }
    }, 1000);
})

promiseFour.then((data)=> {
    console.log(data);
    return data.status;
}).then((status) => {
    console.log(status);
}).catch((err)=> {
    console.log(err);
}).finally(()=> {
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    let error = false;
    setTimeout(() => {
        if(!error){
            resolve({languageName : "JS", codeFile : ".js"});
        } else{
            reject("JS code error");
        }
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch (err){
        console.log(err);
    }

}

consumePromiseFive()
