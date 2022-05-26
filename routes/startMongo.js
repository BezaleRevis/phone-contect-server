const { connectToDb, getDb } = require("../mongo_db/mongo_db");
// starting the moogose db
let db = getDb();
async function mongoToStart() {
  connectToDb((err) => {
    if (!err) {
      db = getDb();
    }else{
        console.log(err);
    }
  });
}

// mongoToStart();

module.exports = { db, mongoToStart };
