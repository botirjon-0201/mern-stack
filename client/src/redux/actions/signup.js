import M from "materialize-css";
import { setUrl } from "../reducer/postSlice";
import { setRegEmail, setRegName, setRegPassword } from "../reducer/regSlice";
import { setClicked } from "../reducer/userSlice";

export const signUp = (props) => (dispatch) => {
  const { regName, regEmail, regPassword, clicked, url } = props;
  if (!regName || !regEmail || !regPassword) {
    return M.toast({
      html: "Please, add all the fields!",
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
        photo: url,
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
          dispatch(setUrl(""));
        }
      });
  }
};
