// Immediately Invoked Function Expressions ( IIFE )


(function one() {
    // named IIFE
    console.log("DE CONNECTED");
    
})();

(
    (name) => {
        // unnamed IIFE
        console.log(`DE CONNECTED TWO ${name}`);
        
    }
)("yash")