import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  return (
    <section className="page_404">
      <div className="containers">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h4 className="text-center ">No avaible Posts</h4>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you are lost!</h3>
                <Link to='/createpost' className="link_404" >
                Create Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
