import { setPosts } from "../reducer/postSlice";

export const likePost = (postId, posts) => (dispatch) => {
  fetch("/like", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      postId,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      const newPosts = posts.map((post) => {
        return post._id === result._id ? result : post;
      });
      dispatch(setPosts(newPosts));
    })
    .catch((err) => console.log(err));
};
