const Phone_contect = require("../../models/phone_contect.js");
const { ObjectId } = require("mongodb");
function deleteContect(req, res) {
  const deleteId = req.params.id;
  console.log(`req.params.id: ${deleteId}`);
  if (ObjectId.isValid(deleteId)) {
    Phone_contect.findByIdAndDelete({ _id: deleteId }, (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send("secseded");
      }
    });
  } else {
    res.status(500).json({ error: "Sorry could not fetch the document" });
  }
}
module.exports = { deleteContect };
