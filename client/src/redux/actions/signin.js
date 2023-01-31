import M from "materialize-css";
import { setLogEmail, setLogPassword } from "../reducer/logSlice";
import { setUser } from "../reducer/userSlice";

export const signIn = (props) => (dispatch) => {
  const { logEmail, logPassword, navigate } = props;

  /* eslint-disable no-useless-escape */
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      logEmail
    )
  ) {
    return M.toast({
      html: "Please, enter your email correctly!",
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
          M.toast({
            html: "You have signed in successfully!",
            classes: "#2e7d32 green darken-3",
          });
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
