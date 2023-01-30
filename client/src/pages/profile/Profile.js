import React, { useEffect } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setMyPosts } from "../../redux/actions";
import { NotFound } from "../../components";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useSelector((state) => state.user);
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
      .then((myPosts) => dispatch(setMyPosts(myPosts)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <h4>{user && user.name}</h4>
          <div className="infoProfile">
            <p className="posts">{myPosts.length} posts</p>
            <Link to={"/myfollowers"}>
              <p className="followers">{user && user.followers.length} followers</p>
            </Link>
            <Link to={"/myfollowing"}>
              <p className="following">{user && user.following.length} following</p>
            </Link>
          </div>
        </div>
      </div>
      {myPosts.length ? (
        myPosts
          .map((myPost) => {
            return (
              <div key={myPost._id} className="gallery">
                <div className="img-item">
                  <img src={myPost.photo} alt={myPost._id} />
                </div>
              </div>
            );
          })
          .reverse()
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Profile;
