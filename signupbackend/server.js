const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/route");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.NEW_DATABASE_ACCESS, () =>
  console.log("Databse connected successfully")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(process.env.PORT || 4000, () =>
  console.log("server is started baby")
);
