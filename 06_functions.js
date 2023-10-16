// Defining a function 
function myFunc(){
    console.log("Hello World")
    // console.log(this)
}

// Calling a function
// myFunc() // =>  this will execute
// myFunc // this will only give reference

// function will return something

function squareNum(number){
    return number*number
}

// console.log(squareNum(5))

const cube = function(num){
    return num * num * num
}

// console.log(cube(5))

// Default values to arguments

const sum = function(num1, num2 = 50){
    return num1 + num2
}

// console.log(sum(10))

// Handling an object
const user = {
    username: "Saad",
    hobby: "Football"
}

function handleObject(anyobj){
    console.log(`the name of user is ${anyobj.username} and his/her hobby is ${anyobj.hobby}`)
}
// handleObject(user)

// console.log(this)



