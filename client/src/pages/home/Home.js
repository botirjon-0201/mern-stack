import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="card home__card">
        <h4>Botirjon</h4>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{color: "red"}} >favorite</i>
          <h6>Title</h6>
          <p>It is my first post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home__card">
        <h4>Botirjon</h4>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
          <h6>Title</h6>
          <p>It is my first post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home__card">
        <h4>Botirjon</h4>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
          <h6>Title</h6>
          <p>It is my first post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
}

export default Home;
