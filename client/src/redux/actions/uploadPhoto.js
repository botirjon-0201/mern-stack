import { setUrl } from "../reducer/postSlice";
import { setUrlProfPhoto } from "../reducer/regSlice";

export const uploadPhoto =
  (image, state = false) =>
  (dispatch) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "sammigram");
    data.append("cloud_name", "dzafzrmxl");

    fetch("https://api.cloudinary.com/v1_1/dzafzrmxl/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (state) {
          dispatch(setUrlProfPhoto(data.url));
        } else {
          dispatch(setUrl(data.url));
        }
      })
      .catch((err) => console.log(err));
  };
