import M from "materialize-css";
import { setRegEmail, setRegName, setRegPassword } from "../reducer/regSlice";
import { setClicked } from "../reducer/userSlice";

export const regData = (props) => (dispatch) => {
  const { regName, regEmail, regPassword, clicked, url } = props;

  /* eslint-disable no-useless-escape */
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      regEmail
    )
  ) {
    return M.toast({
      html: "Please, enter your email correctly!",
      classes: "#ff1744 red accent-3",
    });
  } else {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
        photo: url
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#ff1744 red accent-3" });
        } else {
          M.toast({ html: data.msg, classes: "#2e7d32 green darken-3" });
          dispatch(setClicked(!clicked));
          dispatch(setRegName(""));
          dispatch(setRegEmail(""));
          dispatch(setRegPassword(""));
        }
      });
  }
};
