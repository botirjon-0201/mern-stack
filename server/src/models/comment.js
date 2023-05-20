const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  text: String,
  commentBy: { type: Schema.Types.ObjectId, ref: "User" },
});

model("Comment", commentSchema);