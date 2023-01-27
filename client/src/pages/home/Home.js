import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  commentPost,
  dislikePost,
  likePost,
  setPosts,
  setShowComments,
} from "../../redux/actions";
import HomeSideBar from "../homeSideBar";

function Home() {
  const { posts, showComments } = useSelector((state) => state.home);
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
                    <p className="card-title">
                      Posted by:{" "}
                      <strong className="postedBy">{post.postedBy.name}</strong>
                    </p>
                    <div className="card-image">
                      <img src={post.photo} alt={post._id} />
                    </div>
                    <div className="card-content">
                      <div className="like-dislike">
                        <div className="like">
                          <i
                            className="material-icons"
                            onClick={() => dispatch(likePost(post._id, posts))}
                          >
                            thumb_up
                          </i>
                          <span>{post.likes.length}</span>
                        </div>
                        <div className="dislike">
                          <i
                            className="material-icons"
                            onClick={() =>
                              dispatch(dislikePost(post._id, posts))
                            }
                          >
                            thumb_down
                          </i>
                          <span>{post.dislikes.length}</span>
                        </div>
                        <div className="comment">
                          <i
                            onClick={() =>
                              dispatch(setShowComments(!showComments))
                            }
                            className="material-icons"
                          >
                            comment
                          </i>
                          <span>{post.comments.length}</span>
                        </div>
                      </div>
                      <h4 className="post-title">{post.title}</h4>
                      <p className="post-body">{post.body}</p>
                      {showComments
                        ? post.comments &&
                          post.comments.map((comment) => {
                            return (
                              <p key={comment._id} className="comment-post">
                                <p>{comment.text}</p>
                                <p>
                                  Posted by: <b>{comment.postedBy.name}</b>
                                </p>
                              </p>
                            );
                          })
                        : null}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          dispatch(
                            commentPost(e.target[0].value, post._id, posts)
                          );
                          e.target[0].value = "";
                        }}
                      >
                        <input type="text" placeholder="add comment" />
                      </form>
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
