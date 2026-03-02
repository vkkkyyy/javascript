let distance = 250; 
let amountToPay;

if (distance >= 0 && distance <= 100) {
    amountToPay = "5 USD";
} else if (distance >= 101 && distance <= 500) {
    amountToPay = "10 USD";
} else if (distance >= 501 && distance <= 1000) {
    amountToPay = "20 USD";
} else if (distance >= 1001) {
    amountToPay = "40 USD";
} else {
    amountToPay = "Invalid distance";
}

console.log("Distance traveled: " + distance);
console.log("Amount to Pay: " + amountToPay);
