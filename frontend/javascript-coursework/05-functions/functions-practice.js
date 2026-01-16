/*
function hello(){
    console.log("hello");
}

function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();

function with arguments

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Avartan", 21);
printInfo("aadi", 21);
printInfo("",14);

function Sum(a, b){
    console.log(a+b);
}

Sum(1, 2);
Sum(3, 7);

Practice Q

function AVG(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

AVG(1,2,3);
AVG(2,3,4);



function printTable(n){
    for(let i = n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable(5);

return keyword

function isAdult(age){
    if (age>=18){
        return "adult";
    } else {
        return "not adult";
    }
}

function getSum(n){
    let sum = 0;

    for(let i = 1; i<=n; i++){
        sum +=i;
    }

    return sum;
}

let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result;

    for(let i =0; i<str.length; i++){
        result += str[i];
    }

    return result;

}
    
Scope

let sum = 54; //global scope

function calSum(a, b){
    let sum = a+b;
    console.log(sum); //function/local scope
}

calSum(1, 2);
console.log(sum);

block scope for let and const

{
    var a =25;
}
console.log(a);

for (let i = 1; i<=5; i++){
    console.log(i);
}

console.log(i);

let age = 25;
if(age>=18){
    let str = "adult";
    console.log(str);
}

Lexical Scope outer function can used inside but inside function cannot be used outside
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);  //hoisting
        console.log(y);
    }
    console.log(a);
    innerFunc();
}


let greet="hello"; //global scope

function changeGreet(){
    let greet= "namaste"; //function scope
    console.log(greet);   

    function innerGreet(){ //never called hence not printed
        console.log(greet); //lexical scope
    }
}

console.log(greet);
changeGreet();

Function Expressions

let hello = function(){
    console.log("hello");
}

High Order Functions

function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

multipleGreet(function() {console.log("namaste")}, 1000);

High Order Functions Returns

function oddOREvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if(request == "even"){
        return function(n){
        console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }

}

let request = "odd"; 

Methods
*/
const calculator={
    num: 55,
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};