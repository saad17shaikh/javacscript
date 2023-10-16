// For of 
// Mostly used for arrays 

const myArray = ["India","Australia","New Zealand","South Africa"]

for (const i of myArray) {
    // console.log(i)
}

// for in => it deals with keys

const myObj = {
    username : "Saad",
    age : 17,
    courser : 'CSE'
}

for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`)
}

//  For each

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((item)=>{
    // console.log(item)
})

// Map method

coding.map((item,index)=>{
    // console.log(`${item} and its ${index}`)
})

// filter method

// coding.filter((item)=>{
//     if(item.length<=3){
//         console.log(item)
//     }
// })

const myNums = [1,20,40,39,69]

// const newNumArray = myNums.filter((item)=>{
//     return item % 2==0
// })

// console.log(newNumArray)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let filterBooks = books.filter((bookitem)=>{
    // return bookitem.genre == 'Fiction'
    return bookitem.publish > 2000
})

console.log(filterBooks)
