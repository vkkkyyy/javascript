//TASK
// Read on arrow function with and without parameters.

//ANSWER
//WITH PARAMETERS
//they get straight to the point and involve a set of parentheses for parameters, followed by the "fat arrow" (=>)and then the function body
//Single parameters
const greet = name =>`Hello, ${name}!`
console.log(greet("Abel"));

//NB:In JavaScript, that dollar sign acting as a "bridge" between regular text and live code. When you use it inside backticks, it tells the computer: "Stop reading this as literal text for a second and go find the value of this variable."


//MULTIPLE PARAMETERS
const add = (a ,b)=> a + b;
console.log(add(5 ,10))


//WITHOUT PARAMETERS
const sayHi =()=>"hey there! ";
console.log(sayHi());
//If you were to write const sayHi = => "Hi there!"; (leaving out the parentheses), JavaScript would throw a SyntaxError. Because there is no keyword like function at the start, those parentheses are the only way the computer knows it's looking at a function definition.

//sayHi()-->means js to run the code 
//sayHi --> refers to the variable



// research on modules in Javascript.