//arrow function--->this is a function that is introduced in the ECMA script 6 and they give us the latest / mordern way od defining functions in a  compact manner
//at times the arrow function can be anonymous functions why?this is because they use the names of the variable they are contained in.

const sayHello = ()=>{
    console.log("This is an arrow function")
}
sayHello();

console.log("==========")
//create an arrow function that is able to find the product of three numbers.
const multiplication3numbers = (a , b, c)=> a*b*c;
console.log(multiplication3numbers(2 , 3 , 4));

const product = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product();