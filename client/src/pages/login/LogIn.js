import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logData,
  regData,
  setClicked,
  setIsOpenModal,
  setLogEmail,
  setLogPassword,
  setRegEmail,
  setRegName,
  setRegPassword,
  uploadPhoto,
} from "../../redux/actions";

function LogIn() {
  const { regName, regEmail, regPassword, isOpenModal } = useSelector(
    (state) => state.reg
  );
  const { logEmail, logPassword } = useSelector((state) => state.log);
  const { clicked } = useSelector((state) => state.user);
  const {url} = useSelector(state=>state.post)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regDatas = { regName, regEmail, regPassword, clicked, url };
  const logDatas = { logEmail, logPassword, navigate };
  const [image, setImage] = useState("");

  const postData = () => {
    if (image) {
      uploadPhoto(image);
    } else {
      regData(regDatas);
    }
  };

  return (
    <section>
      <div className={clicked ? "container active" : "container"}>
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1576859958081-27de5c70262a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt="Sign Up"
            />
          </div>
          <div className="formBx">
            <div>
              <h2>Sign In</h2>
              <input
                type="email"
                placeholder="Email"
                value={logEmail}
                onChange={(e) => dispatch(setLogEmail(e.target.value))}
              />
              <input
                type="password"
                placeholder="Password"
                value={logPassword}
                onChange={(e) => dispatch(setLogPassword(e.target.value))}
              />
              <button
                type="submit"
                className="btn"
                onClick={() => dispatch(logData(logDatas))}
              >
                Sign in
              </button>
              <p className="signup">
                Don not have an account ?
                <a href="#!" onClick={() => dispatch(setClicked(!clicked))}>
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <div>
              <div className="avatar-login">
                <div className="containers">
                  <img
                    src="https://res.cloudinary.com/dzafzrmxl/image/upload/v1675005677/User-avatar.svg_eivvxo.png"
                    alt="Avatar"
                    className="images"
                  />
                  <div className="middles">
                    <button
                      className="btn #2962ff blue accent-4"
                      onClick={() => dispatch(setIsOpenModal(true))}
                    >
                      <i className="material-icons">add_a_photo</i>
                    </button>
                  </div>
                </div>
                <h2 className="account-title">Create an Account</h2>
              </div>
              <input
                type="text"
                placeholder="Username"
                value={regName}
                onChange={(e) => dispatch(setRegName(e.target.value))}
              />
              <input
                type="email"
                placeholder="Email Id"
                value={regEmail}
                onChange={(e) => dispatch(setRegEmail(e.target.value))}
              />
              <input
                type="password"
                placeholder="Create Password"
                value={regPassword}
                onChange={(e) => dispatch(setRegPassword(e.target.value))}
              />
              <button
                type="submit"
                className="btn"
                onClick={() => dispatch(postData())}
              >
                Sign Up
              </button>
              <p className="signup">
                Already have an account ?
                <a href="#!" onClick={() => dispatch(setClicked(!clicked))}>
                  Sign In
                </a>
              </p>
            </div>
          </div>
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              alt="Sign In"
            />
          </div>
        </div>
      </div>
      {isOpenModal ? (
        <div className="modalS">
          <div className="modalS__content">
            <div className="modalHeader">
              <h5>Add Your Account Photo</h5>
              <i
                className="material-icons"
                onClick={() => dispatch(setIsOpenModal(false))}
              >
                close
              </i>
            </div>
            <div className="modal-content">
              <div className="file-field input-field">
                <div className="btn #2962ff blue accent-4">
                  <span>
                    <i className="material-icons">add_a_photo</i>
                  </span>
                  <input type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Add Your Photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default LogIn;
