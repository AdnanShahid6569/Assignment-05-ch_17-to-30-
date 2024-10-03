// Chapter 21 to 25

// questions

// // q 01

var firstName = prompt("Enter first Name");

var lastName = prompt("Enter Second Name");

var fullName = firstName + lastName;

conso;le.log(fullName);

// q 02
var model = prompt("Enter Mobile phone model");
console.log(model);

var lenght = model.length;
console.log("The lenght is " + lenght);

// q 03
var country = "Pakistani";
var index = country.indexOf("n");
console.log("Pakistani" + " Index of : " + index);

// // q 04
var country = "Hello World";
var index = country.lastIndexOf("l");
console.log("Hello World" + " Last Index of : " + index);

// q 05
var country = "Pakistani";
var index = country.charAt(3);
console.log("Pakistani" + " Index of 3: " + index);

// q 06
var firstName = "sir";
var lastName  = "Faraz";

var concat = firstName.concat(" "+lastName);
console.log(concat);

// q 07
var city = "Hydrabad";

var replace = city.replace("Hydrabad","Islamabad");

console.log(replace);

// q 08
var message = "Ali and Sami are best friends. They play cricket and football together";

var replace = message.replace("and","&");

console.log(replace);

// q 09
var str = "472";

var num = Number(str);

console.log(`Value ${str} `);
console.log(`Type ${typeof str} `);

console.log(`Value ${num} `);
console.log(`Type ${typeof num} `);


// q 10
var user =  prompt("Enter Letter Convert UpperCase");

var upper = user.toUpperCase();

console.log(upper);

// q 11
var user =  prompt("Enter Letter convert title Case");
var upper = user.slice(0,1).toUpperCase();
var lower = user.slice(1,).toLowerCase();

console.log(upper + lower);

// q 12
var num  = 35.36;
var str = num.toString();
var result = str.replace(".","");
console.log( result);

// q 13

var input = prompt("Enter Password");
var flag = false;

for(i = 0 ; i<input.length; i++){

    if(input.slice(i) === "!" || input.slice(i) === "@" || input.slice(i) === "." || input.slice(i) === ",")
        {
        alert("Special Character Not Allowed");
        flag = true;
    }
}

if(flag === false){
    alert("Thanks For Enter Passkey");
}


// q 14
var A = ["cake","apple pie","cookie","chips","patties"];

var a = prompt("Welcome to ABC Bakkery");

var flag = false;
for(j = 0;  j < A.length; j++){

    if(a === A[j]){
        var upper = A.toUpperCase();
        var upper = A.toLowerCase();

        alert("Available index Number " + [j])
        var flag = true;
    }

}
if(flag === false){
    alert("Not Available")
}

// q 15
// var num = [1,2,3,4,5,6,7,8,9,0];
// var value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// var num = "1234567890";
// var convertNum = num.split("");
// console.log(convertNum);
// console.log("true");


// var user = prompt("Enter Password");
// var pass = user.split("");
// var count ;
// var flag = false;
// for(j = 0; j<convertNum.length;j++){
// for(i = 0; i<pass.length; i++){
//     if(pass[i] === convertNum[j] ){
//         // count = pass;
//         console.log("vaild");
//         flag = true;
               
//     }
// }
// }
// console.log(pass);


 

// q 16
var uni = "University of Karachi";

for(i = 0; i<uni.length;i++) {
    console.log(uni[i]);
    
}

// q 17
var userInput = prompt("Enter Country Name");

if(userInput.length > 0){
    var lastChar = userInput.charAt(userInput.length -1);
    alert("THe Last Character is " + lastChar)
}
else{
    alert("Empty String");
}

// q 18
var text = "The quick brown fox jumps over the lazy dog";

var text = text.toLowerCase();

var word = text.split(" ");
// console.log(word);
var count = 0;

for(i = 0; i<word.length; i++){
    if(word[i] === "the"){
        count++;
    }
}
console.log(count + " the");





















