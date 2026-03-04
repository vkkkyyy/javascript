//arrow function with parameters
const greet = (name)=>{
    console.log("Hello"  + name + "How have you been?I trust that you are good.")
}
greet("James");
greet("Joseph"); 

//example 2
console.log("===============")
//below is a function to find the area of a circle
const pi = 3.142
const circleArea =(pi,radius)=>{
    let area = pi * radius 
    console.log("The area of the circle is:" + area +"cm\u00B2")
}
circleArea(pi ,7)
circleArea(pi ,28)

console.log("===============")
//come up with your own example of an arrow function that utilies 3 
const a = 1/2
const triangleArea = (a,base,height) => {
    let area = a * base * height
    console.log("the area of the triangle is :" + area+ "cm\u00B2")
}

triangleArea(a ,30,45)



