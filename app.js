//  Chapter 17 to 30..

// Questions

// q 01
var arr = [[]];

arr = [];
arr.push(1,2,3);
arr.push(4,5,6);
arr.push(7,8,9);

console.log(arr);

// q 02
var multiarr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(multiarr);



// q 03
for(i = 1; i < 11; i++){
    console.log(i);
    
}

// q 04
var table = prompt("Enter Table Number");

var lenght = prompt("Enter Table Lenght");

for(i = 1; i <= lenght ; i++){
    console.log(`${table} X ${i} = ${table * i}`);
    
}

// q 05
var fruits = ["apple","banana","mango","orange","strawberry"];

for(i = 0;i<fruits.length;i++){
    console.log(`Elements ${i} index of`+fruits[i]);
}

// q 06
var num1= []
for(i = 1; i <=15; i++){
    num1.push(i);
    
}
console.log(num1.join(", "));



var num2 = []
for(i = 10; i > 0; i--)
{
    num2.push(i);
    
}
console.log(num2.join(", "));



var num3 = []
for(i = 0; i<=20;i+=2){
    num3.push(i);
    
}
console.log(num3.join(", "));



var num4 = []
for(i = 1; i<=20;i+=2){
    num4.push(i);
    
}
console.log(num4.join(", "));

var num5 = []
for(i = 2; i<=20;i+=2){
   num5.push(i + "k");
    
}
console.log(num5.join(", "));

// q 07
    var bakk = prompt("Welcome to ABC bakkery you want to order sir'maam")
var bakkery = ["coldrink","icecream","cookie"];

var flag = false;
for(i = 0;i < bakkery.length; i++){
    if(bakk === bakkery[i] ){
        console.log(`${bakk} is available at index ${i} in our bakkery`);
        flag = true;
    }
}
if(flag === false){
    console.log(`${bakk} is not available at index in our bakkery`);

    
}

// q 08
var Num = [24, 53, 78, 91, 12];

var largest = Num[0];
for(i = 1; i<Num.length; i++){
    if(Num[i] > largest){
        largest = Num[i]
    }
}
console.log(`THe Largest Number is ${largest}`);

// q 09
var Num = [24, 53, 78, 91, 12];

var largest = Num[0];
for(i = 1; i<Num.length; i++){
    if(Num[i] > largest){
        largest = Num[i]
    }
}
console.log(`THe Largest Number is ${largest}`);


// q 10
for(i = 5; i<=100;i+=5 ){
    console.log(i);
    
}