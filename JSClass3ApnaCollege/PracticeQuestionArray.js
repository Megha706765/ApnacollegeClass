//Question :  for the given start of an array , change it to final using methods.
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

//Question : Return the index of the "JavaScript" from  the given array , if  it was reversed.
//['c','c++','html','javascript','python','java','c#','sql']

let language = ["C","c++","javascript","python","java","c#","sql"];
console.log(language.reverse());
