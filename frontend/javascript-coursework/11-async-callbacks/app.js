// // let a = 25;
// // console.log(a);
// // let b = 10;
// // console.log(b);
// // console.log(a + b);

// setTimeout(() => {
//     console.log("Hello World");
// }, 2000);

// console.log("Hello");


// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//     }, delay);  
//     });
// }

// changeColor("red", 1000) 
//     .then(() => {
//         console.log("red color was completed"); 
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("green color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color was completed");
//     });

    

//callback nesting -> callback hell
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("yellow", 1000);
//             });
//         });
//     });
// });

//Promises ------------------------------------------------------------------------------

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("success : your data was saved");
//         savetoDb("Hello World", () => {
//             console.log("success2: data2 saves");
//                 savetoDb("shradha", () => {
//                    console.log("success3: data3 saved");
//                 }, () => {
//                     console.log("failure3: weak connection");
//                 })
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//         })
//     }, 
//     () => {
//         console.log("failure : weak connection, your data was not saved");
//     }
// );

//Refactoring with Promises ------------------------------------------------------------------------------

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) +1;
//         if(internetSpeed > 4) {
//             resolve("success : data was saved");
//         } else{
//             reject("failure : data not saved");
//         }
//     });
// }
 
// savetoDb("apna college")
//     .then (() => {
//     console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });

//Promises improved version------------------------------------------------------------------------------
// savetoDb ("apna college")
//     .then(() => {
//         console.log("data1 saved. promise was resolved");
//         return savetoDb("helloworld");
//     })

//     .then(() => {
//         console.log("data2 saved");
//         return savetoDb("aadi");
//     })

//     .then(() => {
//         console.log("data3 saved");
//     })

//     .catch(() => {
//         console.log("promise was rejected");
//     });

//Promises results and errors------------------------------------------------------------------------------
// savetoDb ("apna college")
//     .then((result) => {
//         console.log("data1 saved. promise was resolved");
//         console.log("result of promise",result);
//         return savetoDb("helloworld");
//     })

//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promise", result);
//         return savetoDb("aadi");
//     })

//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result of promise", result);
//     })

//     .catch(() => {
//         console.log("promise was rejected");
//         console.log("result of error",error);
//     });











