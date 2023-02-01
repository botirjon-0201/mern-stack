import React, { useEffect, useRef } from "react";
import "./navbar.css";
import M from "materialize-css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchUser,
  setFindUsers,
  setSearch,
  setUser,
} from "../../redux/actions";

function Navbar() {
  const { user, search, findUsers } = useSelector((state) => state.user);
  const searchPanel = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    M.Modal.init(searchPanel.current);
  }, []);

  const renderNav = () => {
    return user ? (
      <ul>
        <li>
          <i
            className="medium material-icons modal-trigger"
            data-target="modal1"
          >
            search
          </i>
        </li>
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
            onClick={() => {
              localStorage.clear();
              dispatch(setUser(null));
            }}
            to="/login"
          >
            <i className="medium material-icons exit">exit_to_app</i>
          </Link>{" "}
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <Link to="/login">
            <i className="medium material-icons">input</i>
          </Link>
        </li>
      </ul>
    );
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
      <div id="modal1" className="modal" ref={searchPanel}>
        <div className="modal-content">
          <div className="input-field col s6">
            <i className="material-icons prefix">search</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              value={search}
              onChange={(e) => dispatch(searchUser(e.target.value))}
            />
            <label htmlFor="icon_prefix">Search...</label>
          </div>
          <div>
            <ul className="collection">
              {user &&
                findUsers &&
                findUsers.map((findUser) => (
                  <Link
                    key={findUser._id}
                    to={
                      findUser._id === user._id
                        ? "/profile"
                        : "/profile/" + findUser._id
                    }
                  >
                    <li
                      className="collection-item avatar"
                      onClick={() => {
                        M.Modal.getInstance(searchPanel.current).close();
                        dispatch(setSearch(""));
                        dispatch(setFindUsers([]));
                      }}
                    >
                      <img src={findUser.photo} alt="img" className="circle" />
                      <span className="title">
                        {findUser.name} <br /> {findUser.email}
                      </span>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="modal-close waves-effect waves-green btn-flat #0d47a1 blue darken-4"
            onClick={() => {
              dispatch(setSearch(""));
              dispatch(setFindUsers([]));
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
