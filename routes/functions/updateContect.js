const Phone_contect = require("../../models/phone_contect.js");
const { ObjectId } = require("mongodb");

function updateContect(req, res) {
  const updetes = req.body;
  const paramId = req.params.id;
  if (ObjectId.isValid(paramId)) {
    Phone_contect.findByIdAndUpdate(
      { _id: ObjectId(paramId) },
      { $set: updetes }
    )
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ error: "Sorry could not update the phone contect \n" } + err);
      });
  } else {
    res.status(500).json({ error: "Sorry could not fetch the document" });
  }
}
module.exports = { updateContect };
