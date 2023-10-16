// Immediately Invoked Function Expressions (IIFE)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

// Use cases
// 1. Avoid polluting the global namespace
// Execute an async function

(function helloWorld(){
    console.log("hello world")
})();

((name)=>{
    console.log(`${name} is an user`)
})("Saad");