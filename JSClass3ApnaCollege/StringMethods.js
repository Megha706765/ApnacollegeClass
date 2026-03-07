// str.trim()
let msg = "   Megha   ";
console.log(msg.trim());
//console.log(msg);




//Prompt ka use trim method ke sath
// let password = prompt("set your password");
// console.log(password.trim());




//use the toUpperCase() and toLowerCase()
let name = "Apna College";
let msg2 = "error";
console.log(name.toUpperCase());
console.log(msg2.toLowerCase());




//String Methods with Arguments
//indexOf
let str = "ILoveCoding";
console.log(str);
console.log(str.indexOf("Love")) ;
console.log(str.indexOf("I"));
console.log(str.indexOf("love"));


//Metod Chaining(bahut sari mathod yek sath use karna)
let mss = "   Hello    ";
// let newmss = mss.trim();
// console.log("after trim :", newmss);
// newmss = newmss.toUpperCase();
// console.log("after toUpperCase :", newmss);
let newms = mss.trim().toUpperCase();
console.log(newms);



//Slice Method (slice ka matlab hota hai kat dena slice method ka bhi same use hai)
console.log(str.slice(5)) ;
console.log(str.slice(1)) ;
console.log(str.slice(1,4)) ;


