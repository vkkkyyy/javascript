//comparison operators
// they usually evaluate to a boolean answer
let num1=5
let num2=10

console.log(num1==num2)
console.log(num1>=num2)
console.log(num1<=num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 != num2)
console.log(num1 != num1)

//tripple equal sign in js
//strict equality operator. It is used to check if two values are exactly the same, meaning both their value and their data type must match

//logical operators are used to evaluate 2 or more conditions and they also give a boolean answer

//logical AND(&&) it evaluates to true if and only if both of the condition / statement are true
console.log ((num1 < num2 )&& (num2> num1))

//logical OR (||)- It evaluates to true if one of the conditions is true 
console.log ((num1 > num2)|| (num2> num1))

//logic statement NOT (!)- used to negate a condition 
console.log(!(num1 < num2))