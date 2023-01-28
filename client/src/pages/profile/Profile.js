import React, { useEffect } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setMyPosts } from "../../redux/actions";

function Profile() {
  const { myPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/myposts", {
      method: "GET",
      headers: {
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(setMyPosts(data.myPosts)));
  }, []);

  return (
    <div className="profile">
      <div className="profileMain">
        <div>
          <img
            className="profileImg"
            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="profile"
          />
        </div>
        <div>
          <h4>Botirjon Umurzoqov</h4>
          <div className="infoProfile">
            <p>99 posts</p>
            <p>99 followers</p>
            <p>99 following</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        {myPosts &&
          myPosts.map((myPost) => {
            return (
              <div key={myPost._id} className="img-item">
                <img src={myPost.photo} alt={myPost._id} />
              </div>
            );
          }).reverse()}
      </div>
    </div>
  );
}

export default Profile;

// src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
