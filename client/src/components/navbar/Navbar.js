import React from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/actions";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const renderNav = () => {
    if (user) {
      return (
        <ul>
          <li>
            <Link to="/profile">
              <i className="medium material-icons">person</i>
            </Link>
          </li>
          <li>
            <Link to="/createpost">
              <i className="medium material-icons">playlist_add</i>
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "red" }}
              onClick={() => {
                localStorage.clear();
                dispatch(setUser(null));
              }}
              className="large material-icons"
              to="/login"
            >
              <i className="medium material-icons">exit_to_app</i>
            </Link>{" "}
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/login">
              <i className="medium material-icons">input</i>
            </Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="navBar">
      <div className="navigationBar">
        <div className="mainPage">
          <Link to={user ? "/" : "/login"}>
            <i className="medium material-icons">home</i>
          </Link>
        </div>
        <div className="navLink">{renderNav()}</div>
      </div>
    </div>
  );
}

export default Navbar;
