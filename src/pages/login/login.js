import React from "react";
import "./login.css"; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
