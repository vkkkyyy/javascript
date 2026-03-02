// Objects data type:
//An object in js is a data type that stores data in form of key value pairs.

let person={
    Name : "Victoria Githinji",
    Age : 30,
    isRegistered : true
};
console.log("the details of the person is: ",person)

//first method is by the use of the square brackets
console.log(person["Age"])

//second methos is by the use of dot notation
console.log(person.Name)

//check the data type
console.log(typeof(person))

//array data type
//this refers to collection of items that are on indexes
let fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon","Lemon", "Grapes"]

console.log("the entire array of fruits is: ", fruits)
//to access the items of an array we use the index
console.log(fruits[3])
 
//you can slice items of an array
console.log(fruits.slice(2,5))
