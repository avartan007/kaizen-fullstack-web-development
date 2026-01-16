//Event Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("div was clicked");
// })

// ul.addEventListener("click", function() {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis){
//     lis.addEventListener("click", function() {
//     console.log("li was clicked");
// })
// }

//ToDo list app

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("Delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = " ";

});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listenItem = event.target.parentElement;
        listenItem.remove();
        console.log("deleted");
    }
})

// let delBtns = document.querySelectorAll(".Delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }



