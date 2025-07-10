import React from 'react';
import './Login.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost:3000/content");
    const user = res.data.find(
      (users) => users.email === email && users.password === password
    );
    if (user) {
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <label className="login-label">Enter your Email</label>
      <input
        type="email"
        placeholder="Enter Email here"
        className="login-input"
        value={email}
        onChange={handleEmailChange}
      />

      <label className="login-label">Enter your Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        className="login-input"
        value={password}
        onChange={handlePasswordChange}
      />

      <button className="login-button" onClick={handleLogin}>Login</button>

      <strong className="footer-text">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </strong>
    </div>
  );
};

export default Login;
