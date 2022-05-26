const { connectToDb, getDb } = require("../mongo_db/mongo_db");
// starting the moogose db
let db;
connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});
module.exports = db;
