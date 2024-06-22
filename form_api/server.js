import express from "express";

// 1 Initializing the app
const app = express();

// 2 Defining the port
const PORT = 8000;

// 3 Starting the server
app.listen(PORT, (error) => {
  error ? console.log(error.message) : console.log("Your server is connected.");
});
