// Chapter 26 to 30

// Questions

// q 01
var num = 3.45214;

console.log("Number " + num);

var a = Math.round(num);
console.log("Round of " + a);

var b = Math.floor(num);
console.log("floor of " + b);

c = Math.ceil(num);
console.log("Ceil of " + c);

// q 02
var num = -3.45214;

console.log("Number " + num);

var a = Math.round(num);
console.log("Round of " + a);

var b = Math.floor(num);
console.log("floor of " + b);

c = Math.ceil(num);
console.log("Ceil of " + c);

// q 03
var a = Math.round(Math.random() * 6);
console.log(a);

var a = Math.round(Math.random() * 6);
console.log(a);

// q 04
var heads = Math.floor(Math.random()*2 +1)
console.log("Random dice value head " + heads);

var Tails = Math.floor(Math.random()*2 +1)
console.log("Random dice value tail " + Tails);

// q 05
var count = Math.floor(Math.random() *100);
console.log(count);

// q 06
// var secret = Math.floor(Math.random()*10);
// console.log(secret);
var numProm = +prompt("Enter Secret Number 1 to 10");

if(secret === numProm){
    console.log("Congratulate User");
    
}
else{
    console.log("Try Again");
    
}

// // q 07
var userWeight = prompt("Enter Your Weight in killograms");
var Weight = parseFloat(userWeight);

if(!isNaN(Weight)){
    console.log("Your Weight is : " + Weight + " kg");
    
}

// q 08
var num = -4;

var convert = Math.abs(num);

console.log("The Absolute Value is: " + convert);






