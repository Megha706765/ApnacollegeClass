// Question 1 : for the give string: 
// let msg = "help!";
// trime it & convert it to uppercase.
let msg = "help!";
console.log(msg.trim().toUpperCase());


//Question 2 : For the string -> let name = "apnaCollege", predict the output for following :
// name.slice(4,9)
// name.indexOf("na")
// name.replace("Apna","Our")
let name = "apnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("apna","Our"));


//Question 3 : Separate the "College" part  in above  string & replace 'l' with 't' in it.
let newname = name.slice(4).replace('l','t').replace('l','t');
console.log(newname);




