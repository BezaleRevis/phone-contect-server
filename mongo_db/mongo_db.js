const mongoose = require("mongoose");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;

const mongoToStart = new Promise((res, reject) => {
  mongoose
    .connect(uri)
    .then((result) => console.log("connection secseded"))
    .catch((err) =>{ console.log(err)});
  const connection = mongoose.connection;
  connection.once("open", () => {
    res(true);
    console.log(
      "MongoDB database connection established successfully ",
      res.name
    );
  });
});
// connectMongoDB();
module.exports = { mongoToStart };

// const uri = process.env.ATLAS_URI;

// const localUri = "mongodb://localhost:27017/phone_contect";
// let dbConnection;

// module.exports = {
//   connectToDb: (cb) => {
//     MongoClient.connect(uri)
//       .then((client) => {
//         dbConnection = client.db();
//         return cb();
//       })
//       .catch((err) => {
//         console.log(err);
//         return cb(err);
//       });
//   },
//   getDb: () => dbConnection,
// };
