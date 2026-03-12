let students = ["aman","megha","ajay"];
console.log(students);


//
let info = ["Megha",23,8.7];
console.log(info);
console.log(info[0][0]);
console.log(info[0][3]);
console.log(info[2]);


info[10] = "Meghrajsingh";
console.log(info);
info[7] = 22;
console.log(info);

//Array Methods
//  Push : add to end
//  Unshift : add to start
//  Pop : delete form end % return it
//  Shift : delete form start 7 returns it

let Cars = ["audi", "bmw" , "xuv", "maruti"];
console.log(Cars);

//Push Ka use add karne ke liye
Cars.push("toyota");
Cars.push("ferrari");
console.log(Cars);

//Pop ka use hatane ke liye
Cars.pop();
console.log(Cars);
Cars.pop();
console.log(Cars);

//Unshift 
Cars.unshift("toyota");
console.log(Cars);
Cars.unshift("ferrari");
console.log(Cars);

//shift 
Cars.shift();
console.log(Cars);

let followers = ["a","b","c","d"];
let blocked = followers.shift();
console.log(blocked);
console.log(followers);

//indexOf : return index of something
console.log("bmw ka indexOf : "+Cars.indexOf("bmw")) ;

// inclides : Search for a value ye ture / false me value deta hai
let primary = ["red","yellow","blue"];
console.log(primary);
console.log(primary.includes("red"));
console.log(primary.includes("whihte"));

// Concat : 
console.log(followers.concat(primary));
let allValue = followers.concat(primary);
console.log(allValue);

// reverse : reverse an array
console.log(primary.reverse());
console.log(allValue.reverse());

//Slice : copies a portion of an array
console.log(primary.slice(2));
console.log(primary.slice(1));
console.log(Cars.slice(1,4));
console.log(Cars);

//Splice : removes / replaces / add elements in place
// splice (start , deleteCount, item0....itemN)
Cars.splice(1,3,"gwagon","goa","gungun","muskan");
console.log(Cars);

//Sort : Sorts an array
console.log( Cars.sort());
console.log(allValue.sort());

//Array references


//Constant Array
const arr = [1,2,3];

//
let nums = [[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums[0][1]);
console.log(nums[2][1]);