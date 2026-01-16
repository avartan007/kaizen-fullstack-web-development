// this Keyword

/*const student = {
    name:"avartan",
    age: 21,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg=(this.eng + this.math + this.phy)/ 3;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
} 

try& catch
console.log("HELLO");
// let a = 5;
try{
    console.log(a);
} catch(err) {
    console.log("variable doesnt exits");
    console.log(err);
}

Arrow Functions

const sum = (a, b) => {
    console.log(a+b);
};

const cube= (n) =>{
    console.log(n*n*n);
}

const pow =(a, b) =>{
    return a**b;
}

const hello = () =>{
    console.log("hello world");

}
Implicit Return

const mul =(a,b) =>(
    a*b
);

const add = (a, b) => (a+b);

Set Timeout
console.log("hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000);

console.log("Welcome to");

Set Interval

let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

console.log(id);

this with Arrow Function
const student ={
    name:"aman",
    marks: 95,
    prop: this, //global scope of this object
    getName: function(){
        return this.name;
    },

    getMarks: () => {
        console.log(this); //parents scope->window
        return this.marks;
    },

    getInfo1: function() {
        setTimeout( () =>{
            console.log(this); //student obj
        }, 2000);
    },

    getInfo2: function() {
        setTimeout( function() {
            console.log("this"); //window
        }, 2000);
    },


}

Practice Questions
1) Write an arrow function that returns the square of a number 'n'
const square =(n) => n*n;
console.log(4);
console.log(11);

2)Write a function that pronts "Hello World" 5 times at interval of 2s each.
let id =setInterval(()=>{
    console.log("Hello World");
}, 2000);

setTimeout(() =>{
    clearTimeout(id);
    console.log("clear interval ran")
},10000);
*/




