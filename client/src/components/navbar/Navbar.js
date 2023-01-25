import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/reducer";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <li>
            <button
              className="btn"
              onClick={() => {
                localStorage.clear();
                dispatch(setUser(null));
                navigate("/login");
              }}
            >
              Log out
            </button>
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
