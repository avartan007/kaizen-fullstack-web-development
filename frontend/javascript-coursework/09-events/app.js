// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function() {
//     //     console.log("Mouse entered");
//     // }
//     // console.dir(btns);

//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function() {
//         console.log("Double clicked");
//     });
// }

// // btn.onclick = function() {
// //     alert("Button clicked");
// // };

// function sayHello() {
//     alert("Hello!");
    
// }

// function sayName() {
//     alert("Apna College");
// }

//Activity
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText= getRandomColor();

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${blue}, ${green})`;
//     return color;
// }

// console.log(getRandomColor());

//Event Listeners for Elements
// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("para was clicked")
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("mouse inside box")
// })

//this in Event Lister
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function chaangeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", chaangeColor);

// p.addEventListener("click", chaangeColor);

// h1.addEventListener("click", chaangeColor);

// h3.addEventListener("click", chaangeColor);

//Keyboard Events
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let btn = document.querySelector("button");

// btn.addEventListener("dblclick", function(event) {
//     // Log the event object
//     console.dir(event);

//     // Change the background color to green when double-clicked
//     this.style.backgroundColor = "green";
// });

//--------------------------------------------

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("code =", event.code);
    
//     if(event.code === "ArrowUp") {
//         console.log("character moves forward");
//     } else if (event.code === "ArrowDown") {
//         console.log("character moves backward");
//     } else if (event.code === "ArrowLeft") {
//         console.log("character moves left");
//     } else if (event.code === "ArrowRight") {  // Added the missing condition for ArrowRight
//         console.log("character moves right");
//     }
// });


// inp.addEventListener("keydown", function() {
//     console.log("key was pressed")
// } )

//Form Events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();  // This should stop the form from submitting
//     alert("form submitted");
// });

//Extracting Form Data

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
    //  event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[0];
//     // // console.dir(inp);
//     // // console.log(inp.value);
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

//----------------------------------------

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change event");
//     console.log("final value =", this.value);
// });


// user.addEventListener("change", function() {
//     console.log("input event");
//     console.log("final value =", this.value);
// });

//--------------------------------------
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText = inp.value;
// });

//Assignment Questions
        // // Mouseout event: Triggered when mouse leaves the div
        // const mouseOutDiv = document.querySelector("#mouseOutDiv");
        // mouseOutDiv.addEventListener("mouseout", function() {
        //     alert("Mouse left the div!");
        // });

        // // Keypress event: Triggered when a key is pressed in the input field
        // const keyPressInput = document.querySelector("#keyPressInput");
        // const keypressOutput = document.querySelector("#keypressOutput");
        // keyPressInput.addEventListener("keypress", function(event) {
        //     keypressOutput.textContent = "Key pressed: " + event.key;
        // });

        // // Scroll event: Triggered when you scroll inside the div
        // const scrollDiv = document.querySelector("#scrollDiv");
        // scrollDiv.addEventListener("scroll", function() {
        //     console.log("Scrolling...");
        // });

        // // Load event: Triggered when the page finishes loading
        // window.addEventListener("load", function() {
        //     alert("Page has fully loaded!");
        // });

        //-----------------------------------------
        //Q2
        // const button = document.createElement("button");
        // button.textContent = "Click Me";
        // document.getElementById("button-container").append(button);

        // button.addEventListener("click", function() {
        //     button.style.backgroundColor = "green";
        // });

        //Q3
        const nameInput = document.getElementById("nameInput");
        const nameHeading = document.getElementById("nameHeading");

        nameInput.addEventListener("input", function() {
            let validName = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
            nameHeading.textContent = validName;
        });



