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

