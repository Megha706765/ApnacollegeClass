//Question 1. :  for the given start of an array , change it to final using methods.
//start : ["january", "july" ,"march" ,"august"]
//final : ["july","june" ,"march" ,"august"];

let start = ["january", "july" ,"march" ,"august"];
console.log(start);
start.shift();
start.shift();
start.unshift("june");
console.log(start);
start.unshift("july");
console.log(start);

//Question 2. : Return the index of the "JavaScript" from  the given array , if  it was reversed.
//['c','c++','html','javascript','python','java','c#','sql']

let language = ["C","c++","javascript","python","java","c#","sql"];
console.log(language);
console.log(language.reverse());


//Question 3:  Create a nested array to show the following tic-tac-toe game stae.
 
let game = [['X', null, 'O'],[null,'X',null],['O',null,'X']];
console.log(game);
game[0][1] = 'O';
console.log(game);

