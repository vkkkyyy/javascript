//functions with parameters
//parameters are values that get passed as arguments when we invoke a function.
//they help us to create functions that can be reusable through out a program

function greeting(name){
    console.log("hello", name , "how have you been?")
}
greeting("Vicky")
greeting("Reagan")
greeting("Kelvin")

console.log("++++++++++++++++++")

//below is a function with paparemeters to calculate the sum of two numbers
function addition(num1 , num2 ){
    sum = num1 + num2
    console.log("The sum of the numbers is : ", sum)
}

addition(45 , 60)
console.log("===============")
//by use of a function that accepts parameters , calculate the area of triangle whose base is 20cm and height is 12cm.
function multiplication(num1 , num2){
    area = (num1 * num2)/2
    console.log(area)
}
multiplication(20 , 12)

console.log("===============")
//find the simple interest as 50,000 , rate = 5% , time =8yrs
function simpleinterest(principle , rate , time){
    interest = principle * rate * time
    console.log(interest)
}
simpleinterest(50000 , 5/100 , 8)