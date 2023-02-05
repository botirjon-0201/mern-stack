import M from "materialize-css";
import { setLogEmail, setLogPassword } from "../reducer/logSlice";
import { setUser } from "../reducer/userSlice";

export const signIn = (props) => (dispatch) => {
  const { logEmail, logPassword, navigate } = props;
  if (!logEmail || !logPassword) {
    return M.toast({
      html: "Please, add all the fields!",
      classes: "#ff1744 red accent-3",
    });
  } else {
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: logEmail,
        password: logPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#ff1744 red accent-3" });
        } else {
          M.toast({ html: data.msg, classes: "#2e7d32 green darken-3" });
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch(setUser(data.user));
          dispatch(setLogEmail(""));
          dispatch(setLogPassword(""));
          navigate("/");
        }
      });
  }
};
