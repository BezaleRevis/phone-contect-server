const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { router } = require("./routes/routes");
const { mongoToStart } = require("./mongo_db/mongo_db");
require("dotenv").config();

// init app & moddleware
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function startServer() {
  const result = await mongoToStart.then("connection err");
  console.log(result);
}
startServer()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).send("Hello phone cntect project");
});

//using routers
app.use("/phone_contects", router);

module.exports = app;
