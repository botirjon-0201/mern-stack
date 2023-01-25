import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/reducer";

function Home() {
  const { data } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("/allposts", {
      method: "GET",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setData(data.posts));
        // if (data.error) {
        //   M.toast({ html: data.error, classNamees: "#ff1744 red accent-3" });
        // } else {
        //   M.toast({ html: data.msg, classNamees: "#2e7d32 green darken-3" });
        // }
      });
  }, []);

  return (
    <div className="home">
      <div className="post__items">
        <div className="left__side">
          {data.map((item) => {
            return (
              <div key={item._id} className="card">
                <div className="card-image">
                  <img src={item.photo} alt={item._id} />
                  <span className="card-title">
                    {item.postedBy ? item.postedBy.name : "title"}
                  </span>
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <input type="text" placeholder="add comment" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right__side">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg" alt="post" />
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
