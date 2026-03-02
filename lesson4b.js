//Anonymous functions in js
//these are functions that exist without a name 

//below is an example of such functions 
//the below functions shall
// take the name of the variable they are contained in.

const greet = function(){
    console.log("hello there , hope your Monday is fine...")
}
console.log(typeof(greet))
greet ();


//below is another anonymousfunction
(function(){
    console.log("welcome to the world of programming")
});