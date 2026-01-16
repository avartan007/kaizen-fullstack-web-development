/*
for(let i = 1; i<6; i++){
    console.log(i);
}

for(let i = 5; i>1; i--){
    console.log(i);
}



for(let i = 1; i<=15; i= i+2){
    console.log(i);
}

for (let i = 10; i>=2; i = i - 2){
    console.log(i);
}
    


for(let i = 1; i++){
    console.log(i);
}
    

let n = prompt("enter number");
n = parseInt(n);
for(let i = n; i<=n*10; i=i+n){
    console.log(i);
}

for(let i = 1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j =1; j<=3; j++){
        console.log(j)
    }
}
    


let i = 1;
while (i<=5){
    console.log(i);
    i++;
}

let i= 0;
while(i<=20){
    console.log(i);
    i++;
}

Favourite Movie
const movie= "Avatar";
let guess= prompt("guess the movie");

while((guess != movie)&&(guess != "quit")){
    guess=prompt("try again");
} 

if (guess == movie){
    console.log("congrats");
} else{
    console.log("you quit")
}


let i = 1;
while(i<=5){
    if (i == 3){
        break;
    }
    console.log(i);
    i++;
}


let fruits=["mango", "apple", "banana", "litchi", "orange"];

for(let i =fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}
    
let heroes=[["ironman", "spiderman", "thor"],["superman","wonder women", "flash"]];

for(i=0; i<heroes.length; i++){
    console.log(`List #${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}


let marks=[["aadi", 100], ["lavy", 96], ["vishnu", 97]]

for(i = 0; i<marks.length; i++){
    console.log(`List #${i+1}`);
    for(j=0; j<marks[i].length; j++){
        console.log(marks[i][j]);
    }
}


let fruits= ["mango", "banana", "apple"]; doesnt work on internet explorer

for(fruit of fruits){
    console.log(fruits);
}

for(char of "aplacollege"){
    console.log(char);
}

let heroes=[["ironman", "spiderman", "thor"],["superman","wonder women", "flash"]];

for(list of heroes){
    for(hero of list){
        console.log(list);
    }
}
    
*/

