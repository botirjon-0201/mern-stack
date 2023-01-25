import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { setMyPosts, setPosts } from "../../redux/actions";
import HomeSideBar from "../homeSideBar";

function Home() {
  const { posts } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/allposts", {
      method: "GET",
      headers: {
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPosts(data.posts));
      });

    fetch("/myposts", {
      method: "GET",
      headers: {
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(setMyPosts(data.myPosts)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <div className="post__items">
        <div className="left__side">
          <h2>All Posts</h2>
          {posts &&
            posts
              .map((post) => {
                return (
                  <div key={post._id} className="card">
                    <div className="card-image">
                      <img src={post.photo} alt={post._id} />
                    </div>
                    <div className="card-content">
                      <p>
                        Posted By:{" "}
                        <strong className="postedBy">
                          {post.postedBy.name}
                        </strong>
                      </p>
                      <h4 className="post-title">{post.title}</h4>
                      <p className="post-body">{post.body}</p>
                      <input type="text" placeholder="add comment" />
                    </div>
                  </div>
                );
              })
              .reverse()}
        </div>
        <div className="right__side">
          <h2>My Posts</h2>
          <HomeSideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
