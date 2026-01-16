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
let url = "https://catfact.ninja/fact";

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

    async function getFacts() {

        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data.fact);

            let res2 = await fetch(url);
            let data2 = await res2.json();
            console.log(data2.fact);
            
        } catch (error) {
            console.log("Error -", error);
        }

        console.log("bye");


    }