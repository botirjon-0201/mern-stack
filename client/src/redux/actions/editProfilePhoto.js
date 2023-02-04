import { setUser } from "../reducer/userSlice";

export const editProfilePhoto = (image, user) => (dispatch) => {
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
      fetch("/updatephoto", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          photo: data.url,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          dispatch(setUser({ ...user, photo: result.photo }));
          localStorage.setItem(
            "user",
            JSON.stringify({ ...user, photo: result.photo })
          );
        })
        .catch((err) => console.log(err));
    });
};
