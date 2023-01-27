import { setPosts } from "../reducer/homeSlice";

export const dislikePost = (id, posts) => (dispatch) => {
  fetch("/dislike", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Sammi " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      postId: id,
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
