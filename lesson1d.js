//string data type 
//a string is a series / sequence of character that are enclosed inside of quotation marks.
let name = "Victoria Githinji"
console.log("The name is :", name)

//floating point: this is a number with decimal
let quantity =35.5
console.log ("The quantity of the sugar is:", quantity)
console.log(typeof(quantity))

//boolean : it returns true or false
let isAdult = true
let isRegistered = false 
console.log("Is james an adult?", isAdult)
console.log("Is he a registered as a voter ?", isRegistered)

console.log(typeof(isAdult))

//undefined: this is the data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is:", county)

//null data type :it is data type that contains null values 
let username = null
console.log("What is the username?", username)

// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array

// Creating an Array
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing Items
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"

// Finding the length
console.log(fruits.length); // Output: 3



// Creating an Object
const user = {
    firstName: "Alice",
    age: 25,
    isMember: true
};

// Accessing Items (Two ways)
// 1. Dot Notation (Most common)
console.log(user.firstName); // Output: "Alice"

// 2. Bracket Notation (Useful if the key name is in a variable)
console.log(user["age"]);    // Output: 25
