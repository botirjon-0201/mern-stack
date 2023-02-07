import M from "materialize-css";
import {
  setRegEmail,
  setRegName,
  setRegPassword,
  setUrlProfPhoto,
} from "../reducer/regSlice";
import { setClicked } from "../reducer/userSlice";

export const signUp = (props) => (dispatch) => {
  const { regName, regEmail, regPassword, clicked, urlProfPhoto } = props;
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
        photo:
          urlProfPhoto ||
          "https://res.cloudinary.com/dzafzrmxl/image/upload/v1675005677/User-avatar.svg_eivvxo.png",
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
          dispatch(setUrlProfPhoto(""));
        }
      });
  }
};
