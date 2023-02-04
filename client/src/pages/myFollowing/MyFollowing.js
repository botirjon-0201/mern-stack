import React, { useEffect } from "react";
import "./myFollowing.css";
import { useDispatch, useSelector } from "react-redux";
import {
  commentPost,
  deletePost,
  dislikePost,
  likePost,
  setPosts,
  setShowComments,
} from "../../redux/actions";
import { HomeSideBar, Loader } from "../../components";
import { Link } from "react-router-dom";

function MyFollowing() {
  const { posts, myPosts, showComments } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/myfollowing", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((posts) => {
        dispatch(setPosts(posts));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {posts ? (
        <div className="home">
          <div className="post__items">
            <div className="left__side">
              <h2>Posts by Users I follow</h2>
              {posts &&
                posts
                  .map((post) => {
                    return (
                      <div key={post._id} className="card">
                        <Link
                          to={
                            post.postedBy._id === user._id
                              ? "/profile"
                              : `/profile/${post.postedBy._id}`
                          }
                        >
                          <p className="card-title">
                            Posted by:{" "}
                            <strong className="postedBy">
                              {post.postedBy.name}
                            </strong>
                          </p>
                        </Link>
                        <div className="card-image">
                          <img src={post.photo} alt={post._id} />
                        </div>
                        <div className="card-content">
                          <div className="post-icons">
                            <div className="like">
                              <i
                                className="material-icons"
                                onClick={() =>
                                  dispatch(likePost(post._id, posts))
                                }
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
                            <div className="delete-post">
                              {post.postedBy._id === user._id && (
                                <i
                                  className="material-icons"
                                  onClick={() =>
                                    dispatch(
                                      deletePost(post._id, posts, myPosts)
                                    )
                                  }
                                >
                                  delete_forever
                                </i>
                              )}
                            </div>
                          </div>
                          <h4 className="post-title">{post.title}</h4>
                          <p className="post-body">{post.body}</p>
                          {showComments
                            ? post.comments &&
                              post.comments.map((comment) => {
                                return (
                                  <div key={comment._id} className="comment-post">
                                    <p>{comment.text}</p>
                                    <p>
                                      Posted by: <b>{comment.postedBy.name}</b>
                                    </p>
                                  </div>
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
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyFollowing;
