import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setClicked,
  setLogEmail,
  setLogPassword,
  setRegEmail,
  setRegName,
  setRegPassword,
  signIn,
  signUp,
  uploadPhoto,
} from "../../redux/actions";

function LogIn() {
  const { regName, regEmail, regPassword } = useSelector((state) => state.reg);
  const { logEmail, logPassword } = useSelector((state) => state.log);
  const { clicked } = useSelector((state) => state.user);
  const { url } = useSelector((state) => state.post);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regDatas = { regName, regEmail, regPassword, clicked, url };
  const logDatas = { logEmail, logPassword, navigate };

  const signupData = () => {
    if (image) {
      dispatch(uploadPhoto(image));
    } else {
      dispatch(signUp(regDatas));
    }
  };

  useEffect(() => {
    if (url) {
      dispatch(signUp(regDatas));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

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
                onClick={() => dispatch(signIn(logDatas))}
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
                    <div
                      id="input-field"
                      className="file-field input-field add-file"
                    >
                      <div id="icon-add_photo">
                        <i className="material-icons">add_a_photo</i>
                        <span>Photo</span>
                      </div>
                      <div id="input_photo">
                        <input
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                      <div id="file-path-wrapper" className="file-path-wrapper">
                        <input
                          id="file-path"
                          className="file-path validate"
                          type="text"
                        />
                      </div>
                    </div>
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
                onClick={() => signupData()}
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
    </section>
  );
}

export default LogIn;
