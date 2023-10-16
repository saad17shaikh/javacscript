// JavaScript Array is a single variable that is used to store elements of different data types. JavaScript arrays are zero-indexed.


// Creating an array using literals
const footballPlayers = ["Messi","Ronaldo","Rooney","Ronaldinho","Neymar"];
// console.log(footballPlayers)
// Creating an array using Array Constructor
const footballTeams = new Array("Barcelona","Real Madrid", "Manchester United","Juventus","Psg")
// console.log(footballTeams)



// Arrays can have different data types 

// const diffDataTypeArray = [1,"A",true,[0,1,2],footballPlayers]
// console.log(diffDataTypeArray)

// Spread Operator => this will combine arrays

const combineArray = [...footballPlayers,...footballTeams]
// console.log(combineArray)

// We can access using indexes

// console.log(footballPlayers[2])

// const sliceArray = footballPlayers.slice(2,4)
// console.log(`Original Array before slicing: ${footballPlayers}`)
// console.log(`Sliced Array: ${sliceArray}`)
// console.log(`Original Array After slicing: ${footballPlayers}`)


// const spliceArray = footballPlayers.splice(2,4)
// console.log(`Sliced Array: ${spliceArray}`)
// console.log(`Original Array After splicing: ${footballPlayers}`)


/* ######################################################

Slice will create a copy and does not change the original array , It will not include end parameter

But Splice will change the original array and removes the spliced values, it will include end parameter

*/
// Length of array 
// console.log(footballPlayers.length)
// Push
// footballPlayers.push("Mbappe")
// console.log(footballPlayers)



// // POP => removes last element
// footballPlayers.pop()
// console.log(footballPlayers)

/*
ARRAY METHODS =====>

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
*/
