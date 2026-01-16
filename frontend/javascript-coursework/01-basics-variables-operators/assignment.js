// let num = 100

// if (num % 10 == 0) {
//     console.log("good");
// } else {
//     console.log("bad")
// }

// let name= prompt("Enter your name: ");
// let age = prompt("Enter your age: ");

// alert(`${name}is${age}yearsold.`);

// let quarter = 1;
// switch(quarter){
//     case 1:
//     console.log("January,February,March");
//     break;
    
//     case 2:
//     console.log("April,May,June");
//     break;
    
//     case 3:
//     console.log("July,August,September");
//     break;

//     case 4:
//     console.log("October,November,December");
//     break;
    
//     default:
//     console.log("NOTAQUARTER!");
// }

// let str="apples";

// if((str[0]=='a'||start[0]=='A')&&(str.length>5)){
//     console.log("goldenstring");
// } else {
//     console.log("notagoldenstring");
// }

// let a=5;
// let b=18;
// let c=13;
// if(a>b){
//     if(a>c){
//         console.log(a,"islargest");
//     } else{
//         console.log(c,"islargest");
//     }
// }else{
//     if(b>c){
//         console.log(b,"islargest");
//     }else{
//         console.log(c,"islargest");
//     }
// }

let num1= 32;
let num2=47852;

if((num1%10)==(num2%10)){
    console.log("numbershavethesamelastdigitwhichis",num1%10);
} else{
    console.log("numbersdon'thavethesamelastdigit");
}