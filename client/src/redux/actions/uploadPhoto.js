import { setUrl } from "../reducer/postSlice";

export const uploadPhoto = (image) => (dispatch) => {
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
      dispatch(setUrl(data.url));
    })
    .catch((err) => console.log(err));
};
