import React from "react";
import styles from "./register.module.css";

export default function register() {
  return;
  <div>
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button id="btn_login" className="registerLoginButton">
        Login
      </button>
    </div>

    <div className="loginInRegister">
      <div className="loginInRegisterView">
        <a>
          <i className="fas fa-times close-btn"></i>
        </a>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
        </form>

        <button className="loginRegisterButton">
          <a href="register.html">Register</a>
        </button>
      </div>
    </div>
  </div>;
}
