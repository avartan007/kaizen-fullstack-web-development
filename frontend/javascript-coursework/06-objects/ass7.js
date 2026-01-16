
/*
1) 
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total/arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));


2)
const isEven = (n) => {
    if(n%2 == 0){
        console.log(n + " " + "is even");
    }
    else{
        console.log(n + " " + "is odd");
    }
        
}

isEven(4);
isEven(7);

let num=4;
const isEven = (num) => num % 2 == 0;

Q3: The problem is that when you pass a method to setTimeout, the this context (which points to object) is lost, and this inside the method refers to the global object, which doesn’t have the message property.

Q4: The callback function refers to the global object (this points to window in a browser), which has a length of 4. If you want this to refer to object inside callback, you need to bind callback to object.
*/

