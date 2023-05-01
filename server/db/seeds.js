const { User, Post, Comment, Like } = require("../models");

seedDatabase();

async function seedDatabase() {
  // Create some users
  const user1 = await User.create({
    username: "johndoe",
    password: "password123",
    email: "johndoe@example.com",
    fullName: "John Doe",
    posts: [],
    favorites: [],
  });

  const user2 = await User.create({
    username: "janedoe",
    password: "password456",
    email: "janedoe@example.com",
    fullName: "Jane Doe",
    posts: [],
    favorites: [],
  });

  // Create some posts
  const post1 = await Post.create({
    userId: user1._id,
    imageUrl: "https://example.com/image1.jpg",
    likes: 10,
    comments: [],
    caption: "This is my first post!",
    timesFavorited: 2,
  });

  const post2 = await Post.create({
    userId: user2._id,
    imageUrl: "https://example.com/image2.jpg",
    likes: 5,
    comments: [],
    caption: "I love this place!",
    timesFavorited: 1,
  });

  // Create some comments
  const comment1 = await Comment.create({
    userId: user1._id,
    postId: post2._id,
    content: "This looks amazing!",
  });

  const comment2 = await Comment.create({
    userId: user2._id,
    postId: post1._id,
    content: "Great post!",
  });

  // Create some likes
  const like1 = await Like.create({
    userId: user1._id,
    postId: post2._id,
  });

  const like2 = await Like.create({
    userId: user2._id,
    postId: post1._id,
  });

  console.log("Database seeded!");
}
