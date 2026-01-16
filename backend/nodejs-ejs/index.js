// Basic Express + EJS server for demo pages from the course.

const express = require("express"); // Import Express framework
const app = express();              // Create an Express app instance
const path = require("path");       // Node's path utility to resolve file paths

const port = 8080;                  // Port used for local development

// Serve static assets (CSS, client-side JS, images) from /public
app.use(express.static("public"));

// Configure EJS as the view engine and set the views directory
app.set("view engine", "ejs"); // EJS is automatically resolved by Express
app.set("views", path.join(__dirname, "/views")); // Absolute path to /views

// Example: simple home route renders views/home.ejs
app.get("/", (req, res) => {
    res.render("home"); // Express will look in /views for "home.ejs"
});

// Example route that renders a user-like "Instagram" page using data.json
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    // Load data.json (Node caches require, so it is not re-read on every request after first load)
    const instaData = require("./data.json");
    const data = instaData[username];

    console.log(data); // Debug: see matched user data (or undefined if not found)

    if (data) {
        // Pass the matched user object to the template as "data"
        res.render("ig.ejs", { data });
    } else {
        // Fallback view if :username does not exist in data.json
        res.render("error.ejs");
    }
});

// Below are examples from the course retained as reference:
// They demonstrate other routes and EJS usage.
// app.get("/", (req, res) => {
//     res.send("this is home");
// })
// app.get("/ig/:username", (req, res) => {
//     const followers = ["a", "b", "c", "d", "e"];
//     let{username} = req.params;
//     res.render("ig.ejs", {username, followers});
// })
// app.get("/hello", (req, res) => {
//     res.send("hello");
// })
// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1
//     res.render("rolldice.ejs", {diceVal});
// })

// Start the HTTP server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});