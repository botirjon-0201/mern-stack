const { Schema, model } = require("mongoose");

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
      clickBy: {
        _id: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        name: {
          type: String,
        },
      },
    },
  ],
  dislikes: [
    {
      clickBy: {
        _id: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        name: {
          type: String,
        },
      },
    },
  ],
  comments: [
    {
      text: String,
      postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  postedBy: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
  },
});

model("Post", postSchema);
