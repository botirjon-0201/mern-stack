const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  text: String,
  commentBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [commentSchema],
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model("Post", postSchema);
