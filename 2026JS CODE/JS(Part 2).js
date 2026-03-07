//PRACTICE OUESTIONS :-
//Question 1 : create a number variablenum with some value.
//Now , print "good" if the number is divisible by 10 and print "bad" if is not.

let newage = 30;
if(newage % 10 == 0){
    console.log("Good");
}else{
    console.log("bad");
}

//Question 2 : Take the user's name & age as input using prompts. 
// Then return back the following statement to the user as an alert (by substituting their name & age);
// name is age years old.

//[Use template Literals to print this sentence]

let name = prompt("Enter the name : ");
let age = prompt("Enter the age is : ");
let sentence = name+" is "+age+" year old ";
alert(sentence);

// Question 3 : Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4 : October, November, December

// [Use the number as the case value in switch]

let Months_in_Quarter = 3;
switch(Months_in_Quarter){
    case 1 :
    console.log("January, February, March");
    break;
    case 2 :
    console.log(" April, May, June");
    break;
    case 3:
    console.log("July, August, September");
    break;
    case 4 :
    console.log(" October, November, December");
    break;
    default:
    console.log("Wrong Quarter");
}

// Question 4 : A String is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5 
//     For a given string print if it golden or not.

let str = "apples";

if((str.length > 5) && (str[0] === 'A' || str[0] === 'a')){
    console.log("Golden");
}else{
    console.log("Not");
}


//Question 5 : Write a program to find the largest of 3 numbers.
let a = 22;
let b = 75;
let c = 65;
if(a > b && a > c){
    console.log(a);
}else if(b > a && b > c){
    console.log(b);
}else{
    console.log(c);
}

// Question 6 : (Bonus). Write a program to cheak if 2 numbers have the same last digit.
//                Eg. 32 and 47852 have the same last digit i.e.2 
let num1 = 22;
let num2 = 423452;
if(num1 % 10 === num2 % 10){
    console.log("last digit is same",num1%10);
}else{
    console.log("last digit is not same");
}
