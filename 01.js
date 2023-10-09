// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime
// // DataTypes
// 1. Primitive - call by value
/*
    String,
    Number,
    Boolean
    null,
    undefined,
    Symbol,
    BigInt
*/

// 2. Non-Primitive - call by reference

// Array,
// eg:
const countries = ["India", "Australia", "Canada", "Usa"];

// Object,

//  eg:
const myObject = {
  id: 1,
  name: "Saad",
  degree: "Cse",
};
// Function

const MyFunc = () => {
  console.log("Hello");
};

// typeof function
// console.log(typeof countries)
// console.table([typeof countries, typeof myObject, typeof MyFunc]);

//        Output
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │  'object'  │
// │    1    │  'object'  │
// │    2    │ 'function' |

// console.log(typeof null) => object
// console.log(typeof undefined) => undefined



// JavaScript behaviour 

/* 
console.log(1+2) =>3 number
console.log(1+"2") => 12 string
console.log("2" + 1) => 21 string

console.log(1 + 1 + "2") => String
console.log("2" + 1 +1 ) => 211 will be output
*/

// DataType Conversion 

// Number("3.14") => this will convert to number
// String(22) => this will convert to String

// Memory in JavaScript

// Stack is for Primitive datatypes 
// Heap is for Non-Primitive datatypes

// Stack example 

// it creates a copy of a variable so original value is not changed

// let userName = 'Saad'
// let newUserName = userName

// newUserName = "Saad Shaikh"

// console.log(userName)
// console.log(newUserName)


// HEAP example
// It does not create a copy it gives a reference of original one

// let userOne = {
//     userName : 'Saad',
//     userAge : 23
// }

// let userTwo = userOne

// // console.log(userOne.userName);

// userTwo.userName = "Saad Shaikh"

// console.log(userTwo.userName)
// console.log(userOne.userName)

