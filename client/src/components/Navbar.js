import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const { user } = useSelector((state) => state.user);

  const renderNav = () => {
    if (user) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={"/profile"}>My profile</Link>
          </li>
          <li>
            <Link to={"/createpost"}>Create post</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={"/login"}>Log In</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className="white" style={{ height: "10vh" }}>
      <div className="nav-wrapper container navBg">
        <Link to={user ? "/" : "/login"} className="brand-logo left">
          SammiGram
        </Link>
        {renderNav()}
      </div>
    </nav>
  );
}

export default Navbar;
