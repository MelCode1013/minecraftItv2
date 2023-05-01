const express = require("express");
const db = require("./db/database.js");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is running, better go catch it!");
});

require("dotenv").config({ path: ".env" });

db.on("connected", () => {});
