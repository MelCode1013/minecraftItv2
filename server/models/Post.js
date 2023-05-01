const mongoose = require("mongoose");

// Define schema for Post class
const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  caption: { type: String },
  timesFavorited: { type: Number, default: 0 },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
