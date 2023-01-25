import React, { useEffect, useState } from "react";
import "./createPost.css";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "sammigram");
    data.append("cloud_name", "dzafzrmxl");

    fetch("https://api.cloudinary.com/v1_1/dzafzrmxl/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Sammi " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          photo: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({ html: data.error, classes: "#ff1744 red accent-3" });
          } else {
            M.toast({
              html: "You have created a new post successfully",
              classes: "#2e7d32 green darken-3",
            });
            navigate("/");
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div className="card postCard">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="postImg"
        />
        <span className="card-title">Article</span>
        <a href="#!" className="btn-floating halfway-fab red">
          <div className="file-field input-field add-file">
            <div className="center">
              <span>
                <i className="material-icons">add</i>
              </span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </a>
      </div>
      <div className="card-content">
        <div className="input-field col s6">
          <i className="material-icons prefix">subtitles</i>
          <input
            id="title"
            type="text"
            className="validate"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">content_paste</i>
          <input
            id="body"
            type="text"
            className="validate"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label htmlFor="body">Article</label>
        </div>
        <button className="btn" onClick={() => postDetails()}>
          Add Article
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
