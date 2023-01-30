import { setFollow, setProfile, setUser } from "../reducer/userSlice";

export const followUser = (followId, profile) => (dispatch) => {
  fetch("/follow", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Sammi " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      followId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setProfile({ ...profile, user: data.result1 }));
      dispatch(setUser(data.result2));
      dispatch(setFollow(true));
      localStorage.setItem("user", JSON.stringify(data.result2));
    })
    .catch((err) => console.log(err));
};
