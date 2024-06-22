import express from "express";
import cors from "cors";
import { connectMongo } from "./src/config/dbConfig.js";
import { AddFormRouter } from "./src/routes/AddFormRouter.js";

// 1 Initializing the app
const app = express();

// 2 Defining the port
const PORT = 8000;

// 4 connecting to MongoDb
connectMongo();

// 6. defining cors options
const corsOptions = {
  credentials: true,
  origin: true,
};

// 5.adding middlewares
// cors to allow restricted resources from the webpage to be requested from another domain outside the domain
app.use(cors());
// this is used to pass the json string to js object as in post request the data is sent as a string in the body of the request with json payload
app.use(express.json());

// 6. Defining routes
// AddFormRouter route
app.use("/api/addform", AddFormRouter);

// 3 Starting the server
app.listen(PORT, (error) => {
  error ? console.log(error.message) : console.log("Your server is connected.");
});
