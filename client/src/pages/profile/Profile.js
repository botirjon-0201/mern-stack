import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { editProfilePhoto, setIsEdit, setMyPosts } from "../../redux/actions";
import { Modal, NotFound } from "../../components";
import { Link } from "react-router-dom";

function Profile() {
  const { user, isEdit } = useSelector((state) => state.user);
  const { myPosts } = useSelector((state) => state.post);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/myposts", {
      method: "GET",
      headers: {
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((myPosts) => dispatch(setMyPosts(myPosts)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (image) {
      dispatch(editProfilePhoto(image, user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <div className="profile">
      <div className="profileMain">
        <div>
          <div className="containerss">
            <img src={user && user.photo} alt="Avatar" className="profileImg" />
            <div className="middles">
              <div id="input-field" className="file-field input-field add-file">
                <div id="icon-add_photo">
                  <i className="material-icons">add_a_photo</i>
                  <span>Photo</span>
                </div>
                <div id="input_photo">
                  <input
                    type="file"
                    onChange={(e) => dispatch(setImage(e.target.files[0]))}
                  />
                </div>
                <div id="file-path-wrapper" className="file-path-wrapper">
                  <input
                    id="file-path"
                    className="file-path validate"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="profileNameAndSetting">
            <h4 className="profileName">{user && user.name}</h4>
            <i
              className="small material-icons "
              onClick={() => dispatch(setIsEdit(true))}
            >
              settings
            </i>
          </div>

          <div className="infoProfile">
            <p className="posts">{myPosts.length} posts</p>
            <Link to={"/myfollowers"}>
              <p className="followers">
                {user && user.followers.length} followers
              </p>
            </Link>
            <Link to={"/myfollowing"}>
              <p className="following">
                {user && user.following.length} following
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={myPosts.length ? "gallery" : "not-found"}>
        {myPosts.length ? (
          myPosts
            .map((myPost) => {
              return (
                <div key={myPost._id} className="img-item">
                  <img src={myPost.photo} alt={myPost._id} />
                </div>
              );
            })
            .reverse()
        ) : (
          <NotFound />
        )}
      </div>
      {isEdit ? <Modal /> : null}
    </div>
  );
}

export default Profile;
