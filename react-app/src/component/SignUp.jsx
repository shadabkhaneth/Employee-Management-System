import React from 'react';
import './SignUp.css';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/content", { email, password })
      .then(() => {
        alert("Signup Successful");
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sigan Up</h2>

      <input
        type="text"
        placeholder="Enter your name"
        className="signup-input"
        // Name ka state use nahi ho raha, isliye skip किया
      />

      <input
        type="email"
        placeholder="Enter your email"
        className="signup-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="signup-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="text"
        placeholder="Contact number"
        className="signup-input"
        // Contact ka state bhi optional है
      />

      <button className="signup-button" onClick={handleSignup}>Sign Up</button>

      <strong>Already have an account? <Link to="/login">Login</Link></strong>
    </div>
  );
};

export default SignUp;
