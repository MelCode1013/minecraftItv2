const mongoose = require("mongoose");
require('dotenv').config({ debug: true });

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB connected! Yey!");
  })
  .catch((err) => {
    console.log(err);
    console.log("DB_STRING:", process.env.DB_STRING);
  });
module.exports = mongoose.connection;
