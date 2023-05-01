const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
mongoose
  .connect(process.env.DB_STRING || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB connected! Yey!");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose.connection;
