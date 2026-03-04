//Exporting modules
//we export modules so that we can use them in other files/modules in our program

export const calculator = (x , y)=>{
    let difference = x-y 

    console.log("The difference of the two numbers is:", difference)
};


export const simpleInterest =(principle, rate, time) =>{
    let si = (principle * rate* time)/100
    console.log("the simple interest is:", si)
};

const bmi =(weight , height)=>{
    let answer = weight /(height**2)


    console.log("The bmi of the person is:", answer ,"kg/m\u00B2")
};
export{bmi}