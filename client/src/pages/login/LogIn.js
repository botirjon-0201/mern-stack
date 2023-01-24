import React from "react";
import "./login.css";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setClicked,
  setLogEmail,
  setLogPassword,
  setRegEmail,
  setRegName,
  setRegPassword,
  setUser,
} from "../../redux/reducer";

function LogIn() {
  const { regName, regEmail, regPassword } = useSelector((state) => state.reg);
  const { logEmail, logPassword } = useSelector((state) => state.log);
  const { clicked } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regData = () => {
    console.log("regData...");
    /* eslint-disable no-useless-escape */
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        regEmail
      )
    ) {
      return M.toast({
        html: "Please, enter your email correctly!",
        classes: "#ff1744 red accent-3",
      });
    } else {
      console.log(`signup...`);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: regName,
          email: regEmail,
          password: regPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#ff1744 red accent-3" });
          } else {
            M.toast({ html: data.msg, classes: "#2e7d32 green darken-3" });
            dispatch(setClicked(!clicked));
            dispatch(setRegName(""));
            dispatch(setRegEmail(""));
            dispatch(setRegPassword(""));
          }
        });
    }
  };

  const logData = () => {
    console.log("logData...");
    /* eslint-disable no-useless-escape */
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        logEmail
      )
    ) {
      return M.toast({
        html: "Please, enter your email correctly!",
        classes: "#ff1744 red accent-3",
      });
    } else {
      console.log(`singin...`);
      fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: logEmail,
          password: logPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#ff1744 red accent-3" });
          } else {
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            dispatch(setUser(data.user));
            M.toast({
              html: "You have signed in successfully!",
              classes: "#2e7d32 green darken-3",
            });
            dispatch(setLogEmail(""));
            dispatch(setLogPassword(""));
            navigate("/");
          }
        });
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
            <form>
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
              <input type="submit" value="Sign in" onClick={() => logData()} />
              <p className="signup">
                Don not have an account ?
                <a href="#!" onClick={() => dispatch(setClicked(!clicked))}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form>
              <h2>Create an Account</h2>
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
              <input type="submit" value="Sign Up" onClick={() => regData()} />
              <p className="signup">
                Already have an account ?
                <a href="#!" onClick={() => dispatch(setClicked(!clicked))}>
                  Sign In
                </a>
              </p>
            </form>
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
