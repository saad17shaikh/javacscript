const str1 = "Saad Shaikh"

const str2 = new String("SaadSajidShaikh")
// negative index       ..........-3-2-1 

// console.log(str2)
// console.log(str2.length)

// Slice - This method extracts a part of the string based on the given stating-index and ending-index and returns a new string.It will not include end index value

// console.log(str2.slice(0,4))

// console.log(str2.slice(4)) // => will get everything after 4th index

// console.log(str2.slice(-6)) // => will get 6 value from last 
// console.log(str2.slice(-11,-6))  // => Sajid

// Substring -substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

// console.log(str2.substring(0,4))

// SUBSTR - substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

// console.log(str2.substr(4,8))

// Replace 
// console.log(str2.replace("Sajid"," "))
// console.log(str2.replaceAll("Sajid"," "))

// str1.toLowerCase  // str1.toUpperCase

// Trim => removes whitespace - trimStart(), trimEnd()

// let trimString = "       Saad       "
// console.log(trimString.trim())

// charAt - The charAt() method returns the character at a specified index (position) in a string:

// console.log(str2.charAt(2))

// Split 

const longStr = "My name is Mohmad Saad Shaikh"

// console.log(splitStr.split(" "))

//***************************  Search Methods  ******************************** */
// String indexOf()

// console.log(longStr.indexOf("Saad"))

// String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// String search()
// console.log(longStr.search("Saad"))

// String match()
// console.log(longStr.match("ad"))

// String matchAll()
// console.log(longStr.matchAll("ad"))

// String includes()
// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world"))
// String startsWith()
// String endsWith()


