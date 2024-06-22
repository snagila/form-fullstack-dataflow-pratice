import express from "express";
import { Addform } from "../model/AddFormModel.js";

// to connect to the endpoints that are defined at server.js
export const AddFormRouter = express.Router();

// POST from client | CREATE in db
AddFormRouter.post("/", (req, res) => {
  // the data comes at body of request send by client
  const task = req.body;

  // creating the task in database
  // createdTask param is sent by then function
  Addform(task)
    .then((createdTask) => {
      res.json({
        status: "Success",
        data: createdTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Form not submitted",
      });
    });
});
