// FUNCTIONS HOISTING

// A function can run too even if it is called before declaration 

// for eg:

// myFunc()

function myFunc(){
    console.log("hello i am a function")
}

// but it will not work with functions expresssions for eg:-

// secondFunc()

// const secondFunc = function(){
//     console.log("I am a second func")
// }

// the above example will give error