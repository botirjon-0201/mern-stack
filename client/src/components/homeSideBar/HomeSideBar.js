import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyPosts } from "../../redux/actions";

function HomeSideBar() {
  const { myPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/myposts", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((myPosts) => {
        dispatch(setMyPosts(myPosts));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {myPosts &&
        myPosts
          .map((myPost) => {
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
          })
          .reverse()}
    </>
  );
}

export default HomeSideBar;
