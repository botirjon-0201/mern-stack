import M from "materialize-css";
import { setMyPosts, setPosts } from "../reducer/postSlice";

export const deletePost = (postId, posts, myPosts) => (dispatch) => {
  fetch(`/deletepost/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Sammi " + localStorage.getItem("jwt"),
    },
  })
    .then((res) => res.json())
    .then((result) => {
      const newPosts = posts.filter((post) => post._id !== result._id);
      const newMyPosts = myPosts.filter((myPost) => myPost._id !== result._id);
      dispatch(setPosts(newPosts));
      dispatch(setMyPosts(newMyPosts));
      M.toast({
        html: "Post deleted successfully!",
        classes: "#2e7d32 green darken-3",
      });
    })
    .catch((err) => console.log(err));
};
