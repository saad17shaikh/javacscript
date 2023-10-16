// Creating Object using literals
const player1 = {
    playerName : "Mohd Siraj",
    team : "India",
    type : "Fast-Bowler",
    age: 29,
    "in Squad" : true,
}
// console.log(player1)
// console.log(typeof player1)

player1.wickets = 250
// console.log(player1)
// Accessing an element two ways by . or []
// console.log(player1.playerName)
// console.log(player1["in Squad"])

// We can change the values =>

player1.age = 32
// console.log(player1)

//  If we use Object.freeze then we cannot change the values
Object.freeze(player1)

player1.team = "Australia"
// console.log(player1)

// Creating object using Constructor

const player2 = new Object()
player2.playerName = "Virat Kohli"
player2.age = 33
player2.type = "Batsman"

// console.log(player2)

// object inside objects
const player3 = {
    playerName: "Ms Dhoni",
    age : 40,
    team : "India",
    runs : 10000,
    IplInfo :{
        IplTeam : "CSK",
        role : "Captain",
        Iplruns : 3000
    }
}

// What is the role of player3 in Ipl 

// console.log(player3.IplInfo.role)


// const combinePlayers = {...player1, ...player2}
const combinePlayers = Object.assign({},player1,player2)
// console.log(combinePlayers)
// => If key is same it will overwrite it 

// // Spread in Objects
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(player3))
// console.log(Object.keys(player3.IplInfo))
// console.log(Object.values(player3))

// destructuring => this is use in react while using props 
// const {playerName : name} = player1

// console.log(name)

// player1.greeting = function() {
//     console.log(`hello from ${this.playerName}`)
// }

// player1.greeting()
player2.greeting = function(){
    console.log("Hello JS user");
}
player2.greetingTwo = function(){
    console.log(`Hello JS user, ${this.playerName}`);
}

// console.log(player2.greeting());
player2.greetingTwo()