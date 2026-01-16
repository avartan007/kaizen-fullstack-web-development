// //Parse function
// let jsonRes = '{"fact":"The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d","length":54}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// //stringify
// let student = {
//     name: "aadi",
//     age: 21
// }

//First Api Request
//let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
// console.log(res);
// return res.json();
// })

// .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
// })

// .then((res) => {
//     return res.json();
// })

// .then((data2) => {
//     console.log("data2 = ", data2);
// })

// .catch((err) => {
//     console.log("ERROR -", err);
// });

// console.log("Hello World");

// async function getFacts() {

//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch (error) {
//         console.log("Error -", error);
//     }

//     console.log("bye");

// }

//Axios--------------------------------------------

// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//     let fact =  await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error -", e);
//     return "No fact found";
//   }
// }

//-------------------------------------------------------

// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async() => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return (res.data.message);  
//   } catch (e) {
//     console.log("error -", e);
//     return "No image found";
//   }
// }


//Sending Headers-------------------------------------------


// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err) {
//         console.log(err);
//     }
// }

//Updating query strings------------------------------------
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let collArr = await getColleges(state);
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (let col of collArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(url + state);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}


