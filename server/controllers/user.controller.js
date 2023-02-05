const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    Post.find({
      postedBy: { _id: req.params.id },
    })
      .populate("postedBy", "_id name")
      .exec((error, posts) => {
        if (error) {
          return res.status(404).json({ error });
        }
        res.json({ user, posts });
      });
  } catch (error) {
    return res.status(404).json({ error: "User not found" }); // Mumkinmi?
  }
};

const followUser = (req, res) => {
  try {
    User.findByIdAndUpdate(
      req.body.followId,
      {
        $push: { followers: req.user._id },
      },
      { new: true },
      (error, result1) => {
        if (error) {
          return res.status(404).json({ error });
        }
        User.findByIdAndUpdate(
          req.user._id,
          {
            $push: { following: req.body.followId },
          },
          { new: true }
        )
          .select("-password")
          .then((result2) => {
            res.json({ result1, result2 });
          });
      }
    );
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const unfollowUser = (req, res) => {
  try {
    User.findByIdAndUpdate(
      req.body.unfollowId,
      {
        $pull: { followers: req.user._id },
      },
      { new: true },
      (err, result1) => {
        if (err) {
          return res.ststus(422).json({ error: err });
        }
        User.findByIdAndUpdate(
          req.user._id,
          {
            $pull: { following: req.body.unfollowId },
          },
          { new: true }
        ).then((result2) => {
          res.json({ result1, result2 });
        });
      }
    );
  } catch (error) {
    return res.ststus(404).json({ error });
  }
};

const updatePhoto = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { photo: req.body.photo } },
    { new: true },
    (error, result) => {
      if (error) {
        return res.status(404).json({ err: "Photo can not posted" });
      }
      res.json(result);
    }
  );
};

const updateProfile = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { name: req.body.myName } },
      { new: true },
      (error, result) => {
        if (error) {
          return res.status(404).json({ error: "Profile can not updated" });
        } else {
          res.json(result);
        }
      }
    );
  } catch (error) {
    console.log(error); // ko'rish kerak
  }
};

const searchUser = async (req, res) => {
  try {
    const userSearchPanel = new RegExp("^" + req.body.query);
    const user = await User.find({ name: { $regex: userSearchPanel } }).select(
      "_id name email photo"
    );
    res.json(user);
  } catch (error) {
    console.log(err); // ko'rish kerak
  }
};

module.exports = {
  getUser,
  followUser,
  unfollowUser,
  updatePhoto,
  updateProfile,
  searchUser,
};
