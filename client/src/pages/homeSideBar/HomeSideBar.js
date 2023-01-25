import React from "react";
import { useSelector } from "react-redux";

function HomeSideBar() {
  const { myPosts } = useSelector((state) => state.profile);

  return (
    <>
      {myPosts &&
        myPosts.map((myPost) => {
          return (
            <div key={myPost._id} className="card">
              <div className="card-image">
                <img src={myPost.photo} alt={myPost._id} />
                <span className="card-title">
                  {myPost.postedBy ? myPost.postedBy.name : "title"}
                </span>
              </div>
              <div className="card-content">
                <b>{myPost.title}</b>
                <p>{myPost.body}</p>
              </div>
            </div>
          );
        }).reverse()}
    </>
  );
}

export default HomeSideBar;
