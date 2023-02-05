const mongoose = require("mongoose");
const Post = mongoose.model("Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id name")
      .populate("comments.commentBy", "_id name");
    res.json(posts);
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body, photo } = req.body;
    if (!title || !body || !photo) {
      return res.status(400).json({ error: "Please, add all the fields" });
    }
    const newPost = new Post({
      title,
      body,
      photo,
      postedBy: req.user._id,
    });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const getMyPosts = async (req, res) => {
  try {
    const myPosts = await Post.find({ postedBy: { _id: req.user._id } })
      .populate("postedBy", "_id, name")
      .populate("comments.commentBy", "_id name");
    res.json(myPosts);
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId, (error, post) => {
      if (error) {
        return res.status(404).json({ error });
      } else {
        res.json(post);
      }
    });
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    if (post.likes.includes(req.user._id)) {
      Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      )
        .populate("postedBy", "_id name")
        .populate("comments.commentBy", "_id name")
        .exec((error, result) => {
          if (error) {
            return res.status(404).json({ error });
          } else {
            res.json(result);
          }
        });
    } else {
      if (post.dislikes.includes(req.user._id)) {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $pull: { dislikes: req.user._id },
            $push: { likes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((error, result) => {
            if (error) {
              return res.status(404).json({ error });
            } else {
              res.json(result);
            }
          });
      } else {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $push: { likes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((error, result) => {
            if (error) {
              return res.status(404).json({ error });
            } else {
              res.json(result);
            }
          });
      }
    }
  } catch (error) {
    console.log(err); // ko'rish kerak
  }
};

const dislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    if (post.dislikes.includes(req.user._id)) {
      Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: { dislikes: req.user._id },
        },
        { new: true }
      )
        .populate("postedBy", "_id name")
        .populate("comments.commentBy", "_id name")
        .exec((error, result) => {
          if (error) {
            return res.status(404).json({ error });
          } else {
            res.json(result);
          }
        });
    } else {
      if (post.likes.includes(req.user._id)) {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $pull: { likes: req.user._id },
            $push: { dislikes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((error, result) => {
            if (error) {
              return res.status(404).json({ error });
            } else {
              res.json(result);
            }
          });
      } else {
        Post.findByIdAndUpdate(
          req.body.postId,
          {
            $push: { dislikes: req.user._id },
          },
          { new: true }
        )
          .populate("postedBy", "_id name")
          .populate("comments.commentBy", "_id name")
          .exec((error, result) => {
            if (error) {
              return res.status(404).json({ error });
            } else {
              res.json(result);
            }
          });
      }
    }
  } catch (error) {
    console.log(err); // ko'rish kerak
  }
};

const commentPost = (req, res) => {
  try {
    const comment = {
      text: req.body.text,
      commentBy: req.user.id,
    };
    Post.findByIdAndUpdate(
      req.body.postId,
      { $push: { comments: comment } },
      { new: true }
    )
      .populate("postedBy", "_id name")
      .populate("comments.commentBy", "_id name")
      .exec((error, result) => {
        if (error) {
          return res.status(404).json({ error });
        } else {
          res.json(result);
        }
      });
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const getMyFollowing = async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: { $in: req.user.following } })
      .populate("postedBy", "_id name")
      .populate("comments.commentBy", "_id name");
    res.json(posts);
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const getMyFollowers = async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: { $in: req.user.followers } })
      .populate("postedBy", "_id name")
      .populate("comments.commentBy", "_id name");
    res.json(posts);
  } catch (error) {
    console.log(err); // ko'rish kerak
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getMyPosts,
  deletePost,
  likePost,
  dislikePost,
  commentPost,
  getMyFollowing,
  getMyFollowers,
};
