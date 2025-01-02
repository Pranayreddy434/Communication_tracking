import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Using navigate hook for redirection

  const handleLogin = (e) => {
    e.preventDefault();

    // Get user credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Validate login credentials
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      navigate("/user-dashboard");  // Redirect to user dashboard or admin dashboard
    } else {
      setErrorMessage("Invalid username or password");
    }
    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
      navigate("/admin-dashboard");  // Redirect to user dashboard or admin dashboard
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Please enter your credentials</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="/signup">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
