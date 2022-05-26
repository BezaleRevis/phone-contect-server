const express = require("express");
const router = express.Router();
const Phone_contect = require("../models/phone_contect.js");

function addNewContect (req, res)  {
  const newContect = req.body;
  console.log(newContect);
  const phoneContect = new Phone_contect(newContect);
  phoneContect
    .save()
    .then((result) => {
      res.send(result);
      console.log("addet a new contect sucseded");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { addNewContect };
