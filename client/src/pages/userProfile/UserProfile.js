import React, { useEffect } from "react";
import "./userProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { followUser, setProfile, unfollowUser } from "../../redux/actions";

function UserProfile() {
  const { profile, follow } = useSelector((state) => state.user);
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/user/${userId}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProfile(data));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <>
      {profile ? (
        <div className="profile">
          <div className="profileMain">
            <div>
              <img
                className="profileImg"
                src={profile.user.photo}
                alt="profile"
              />
            </div>
            <div>
              <h4>{profile.user.name}</h4>
              <div className="infoProfile">
                <p>{profile.posts.length} posts</p>
                <p>{profile.user.followers.length} followers</p>
                <p>{profile.user.following.length} following</p>
              </div>
              <div className="follow">
                <button
                  className="btn #2962ff blue accent-4"
                  onClick={() =>
                    follow
                      ? dispatch(unfollowUser(userId, profile))
                      : dispatch(followUser(userId, profile))
                  }
                >
                  {follow ? "Un follow" : "Follow"}
                </button>
              </div>
            </div>
          </div>
          <div className="gallery">
            {profile.posts
              .map((userPost) => {
                return (
                  <div key={userPost._id} className="img-item">
                    <img src={userPost.photo} alt={userPost._id} />
                  </div>
                );
              })
              .reverse()}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default UserProfile;
