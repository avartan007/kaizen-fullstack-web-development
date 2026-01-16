// let msg = "   Hello    ";
// console.log(msg);

//.trim() to remove whitespaces from both sides
//.toLowerCase() and .toUpperCase()

/*METHOD WITH 
argumentstringName.method(arg)
stringName.indexOf()*/

/*Method Chaining
let msg = "        Hello         ";
let newMsg = msg.trim();
console.log("after trim: ", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase: ", newMsg)

let newMsg = msg.trim().toUpperCase();
console.log(newMsg); 
*/

/*Slice METHOD
str.slice(5)
str.slice(1, 4)
str.slice(-num) = str.slice(length - num)

let msg = "hello"; 
console.log(msg.slice(3, 4)); */

/* replace METHOD
let str = "IloveCoding";
str.slice("love", "do")
str.slice("o", "x")
*/

/*Practice Questions
let msg = "       hello!           "
console.log(msg.trim().toUpperCase());

let name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

console.log(name.slice(4).replace("l", "t"));
*/

/*Arrays Data Structure
let students = ["av", "aadi", "lavy"];
let nums = [2, 4, 6, 8];

let marks= [99, 98, 100, 78, 97];

let info = ["avartan", 21, 90];

Arrays are mutable

Array Methods
Push, Pop, Unshift, Shift*/

/*Practice Questions
let months = ['jan', 'july', 'march', 'aug'];
undefined
months
(4)=['jan', 'july', 'march', 'aug']
months.shift();
'jan'
months.shift();
'july'
months.unshift("june");
3
months
(3)=['june', 'march', 'aug']
months.unshift("july");
*/

/* ARRAYS IN JS
indexOF : returns index
primary.indexOf("yellow");
1

primary.indexOf("green");
-1 

includes: search
primary.includes("red");
true

primary.includes("green");
false

concatination
array1.concat(array1);

reverse
arrayName.reverse();

slice
arrayName.slice();
(x, y); value from x is included , y is not printed its printed only upto preceding value of y
array.slice(-x); prints value from last

splice 
removes / replaces / add elements in place
splice(start, deleteCount, item0...itemN)

sort 
sort an array
cars.sort(); Ascending order

references

const array the address is stored and it cant be changed

Nested Arrays
let nums= [[2,4],[1,2],[2,5]]; 
*/
 


/* 

let = [["x", null, "O"],["null", "X", "null"],["0", null, "0"]];

Practice Questions
let array = [7, 9, 0, -2];
let n = 3;

let ans = array.slice(0, n);
let ans = array.slice(array.length-n);
console.log(ans);

let str= prompt("please enter a string");

if(str.length==0){
    console.log("stirng is empty");
} else {
    console.log("string is not empty");
}



let str = "AmedbhDjbaBD";
let idx = 0;

if (str[idx]==str[idx].toLowerCase()) {
    console.log("character is lower case");
} else {
    console.log("character is not lowercase");
}

let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

let arr = ["hello",23, 24, 64];
let item =64;

if (arr.indexOf(item) != -1){
    console.log("element exists in array");
} else {
    console.log("element doesnt exist in array");
}
*/