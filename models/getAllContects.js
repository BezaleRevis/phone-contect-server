const express = require("express");
const app = express.Router();
const db = require("../mongo_db/getDb");
const { router } = require("../routes/routes");
// post login data

let getAllContects;
function getContects(db) {
  getAllContects = app.get("/phone_contects", (req, res) => {
    try {
      let phone_contects = [];
      db.collection("phone_contects")
        .find()
        .sort({ name: 1 })
        .forEach((phoneContect) => {
          phone_contects.push(phoneContect);
        })
        .then(() => {
          res.status(200).json(phone_contects);
        })
        .catch((err) => {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
          res.status(500).json({ error: "could not fetch the phone contects" });
        });
    } catch (err) {
      console.log(err);
    }
  });
}
module.exports = {getContects, getAllContects };
