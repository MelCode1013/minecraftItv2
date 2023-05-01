const mongoose = require("mongoose");

// Define schema for Like class
const likeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
