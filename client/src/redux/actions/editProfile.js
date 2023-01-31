import M from "materialize-css";
import { setIsEdit, setMyName, setUser } from "../reducer/userSlice";

export const editProfile = (myName) => (dispatch) => {
  if (myName) {
    fetch("/editprofile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        myName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUser(data));
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(setMyName(""));
        dispatch(setIsEdit(false));
        M.toast({
          html: "Your profile was changes successfully!",
          classes: "#ff1744 red accent-3",
        });
      })
      .catch((err) => console.log(err));
  } else {
    M.toast({
      html: "Please, input name!",
      classes: "#ff1744 red accent-3",
    });
  }
};
