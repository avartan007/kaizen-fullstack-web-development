// forEach function

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((el)  => {
//     console.log(el);
// });

// arr.forEach(function(el) {
//     console.log(el);
// });

// // let print = function(el) {
// //     console.log(el);
// // }

// // arr.forEach(print);

// let arr = [{
//     name: 'A',
//     age: 20,
//     marks: 95
// }, {
//     name: 'B',
//     age: 21,
//     marks: 90
// }, {
//     name: 'C',
//     age: 22,
//     marks: 85
// }]; 

// let gpa = arr.map((el) => {
//     return el.marks / 10;
// });

// arr.forEach((student) => {
//     console.log(student.age);
// });

//Map function
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let double = num.map((el) => {
//     return el * el;
// });

//Filter function-------------------------------------------------------------
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = nums.filter((el) =>{
//     return el % 2 != 0;
//     return el < 5;
// });

//Reduce---------------------------------------------------------------------
// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el
// });
// console.log(finalVal);

//Maximum in Array-----------------------------------------------------------
//let arr = [1, 4, 2, 3, 5, 7, 9, 11, 2, 1];

// let max = -1;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);

// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);

//Practice Questions----------------------------------------------------------
// 1Q
// let nums = [10, 20, 20, 40];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);

// 2Q
// let nums = [10, 20, 30, 40];

// function getMin(nums) {
//   let min = nums.reduce((min, el) => {
//     if (min > el) {
//       return el;
//     } else {
//       return min;
//     }
//   });
//   return min;
// }

//Default Parameters----------------------------------------------------------
// function sum(a = 2, b){
//      return a + b;
// }

//Spread Operator--------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

//Array Literals
// let chars = [..."hello"];

// let odd = [1, 3, 5];
// let even = [2, 4, 6];

// let nums =[...odd, ...even];

//Object Literals------------------------------------------------------------
// const data = {
//     email :"aadi@gmail.com",
//     password : "1234",
// };

// const dataCopy = {...data, id: 1, country: "India"};

// let arr = [1, 2, 3, 4, 5];
// let obj1 = {...arr};

// let obj2 = {..."hello"};

//Rest-----------------------------------------------------------------------
// function sum(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log("you gave us: ", args[i]);
//     }
// }

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

// function sum(...args) {
//    return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         } else {
//             return min;
//         }
//     });
// }

//Destructuring---------------------------------------------------------------
// let names = ["tony", "bruce", "peter", "steve", "abc", "def", "ghi"];
// // let winner = names[0];
// // let runnerup = names[1];
// // let secondRunnerup = names[2];

// let[winner, runnerup, ...others] = names;

//Destructuring Objects-------------------------------------------------------
const student = {
    name: "Aadi",
    age: 20,
    marks: 95,
    class: 12,
    subjects: ["maths", "science", "english"],
    username: "aadi123",
    password: "1234"
};

let {username: user, password: secret, city: place ="Mumbai"} = student;
