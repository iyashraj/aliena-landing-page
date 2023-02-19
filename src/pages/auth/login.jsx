import React from "react";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "../../features/authSlice";

const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const authHandler = () => {
    dispatch(loggedIn());
  };
  return (
    <div className="section-main">
      <div className="card-main">
        <div className="card-header">
          <h3>Login</h3>
          <span>Enter your credentials</span>
        </div>
        <div style={{marginTop: "20px" ,display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <div className="username">
            <input spellCheck="false" type="text" placeholder="Username" />
          </div>
          <div className="username">
            <input spellCheck="false" type="text" placeholder="Password" />
          </div>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
