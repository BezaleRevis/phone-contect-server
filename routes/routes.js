const express = require("express");
const router = express.Router();
const Phone_contect = require("../models/phone_contect.js");
const { ObjectId } = require("mongodb");
// importing routes function
const { addNewContect } = require("./routeAddContect");
const { getAllContects } = require("./functions/getAllContects.js");
const { deleteContect } = require("./functions/deleteContect");
const { updateContect } = require("./functions/updateContect");
// geting all contects
try {
  router.get("/", (req, res) => {
    getAllContects(req, res); //call func for login
  });
} catch (err) {
  console.log(err);
}

// adding a new user
router.post("/", (req, res) => {
  addNewContect(req, res); // call finc for adding new contect
});

// deleting a contect
router.delete("/:id", (req, res) => {
  deleteContect(req, res);
});

// updating a contect
// updeting data
try {
  router.patch("/:id", (req, res) => {
    updateContect(req, res);
  });
} catch (err) {
  console.log(err);
}

module.exports = { router };
