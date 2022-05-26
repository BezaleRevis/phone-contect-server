
const Phone_contect = require("../../models/phone_contect.js");

function getAllContects(req, res) {
  Phone_contect.find()
    .sort({ name: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { getAllContects };
