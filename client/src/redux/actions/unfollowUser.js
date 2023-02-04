import { setFollow, setProfile, setUser } from "../reducer/userSlice";

export const unfollowUser = (unfollowId, profile) => (dispatch) => {
  fetch("/unfollow", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      unfollowId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setProfile({ ...profile, user: data.result1 }));
      dispatch(setUser(data.result2));
      dispatch(setFollow(false));
      localStorage.setItem("user", JSON.stringify(data.result2));
    })
    .catch((err) => console.log(err));
};
